const {addDays, format, isBefore} = require('date-fns');

const ServiceHistory = require('../Models/ServiceHistory')
const EmployeeHasService = require('../Models/EmployeeHasService')
const {Op} = require("sequelize");

async function checkTime(idEmployee, idService, dateYear, dateMonth, dateDay, dateHours, dateMinutes) {
    const employeeHasService = await EmployeeHasService.findOne({
        where: [
            {
                idEmployee: idEmployee
            },
            {
                idService: idService
            },
        ]
    })

    if(!employeeHasService) {
        return {message: "Услуга не найдена"}
    }

    console.log(employeeHasService.idEmployeeHasService + ' ' + dateYear + ' ' + dateMonth + ' ' + dateDay + ' ' + dateHours + ' ' + dateMinutes)

    const serviceHistory = await ServiceHistory.findOne({
        where: [
            {
                status: 'В ожидании'
            },
            {
                idEmployeeHasService: employeeHasService.idEmployeeHasService
            },
            {
                year: dateYear
            },
            {
                month: dateMonth
            },
            {
                day: dateDay
            },
            {
                hours: dateHours
            },
            {
                minutes: dateMinutes
            },
        ]
    })

    return !!serviceHistory
}

class timeController {
    async getDates(req, res) {
        try {
            const { year, month } = req.body;
            const startDate = new Date(year, month - 1, 1);
            const endDate = new Date(year, month, 1);
            const dates = [];
            let currentDate = startDate;
            const today = new Date();

            while (isBefore(currentDate, endDate)) {
                const dateString = format(currentDate, 'dd.MM');

                if (currentDate.getFullYear() === today.getFullYear() &&
                    currentDate.getMonth() === today.getMonth() &&
                    currentDate.getDate() < today.getDate()) {
                    currentDate = addDays(currentDate, 1);
                    continue;
                }

                dates.push({
                    date: dateString,
                    dateYear: currentDate.getFullYear(),
                    dateMonth: currentDate.getMonth() + 1,
                    dateDay: currentDate.getDate(),
                    isExpired: (currentDate < today)
                });
                currentDate = addDays(currentDate, 1);
            }

            return res.json(dates);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Ошибка получения данных." });
        }
    }

    async getTime(req, res) {
        try {
            const {idEmployee, idService, dateYear, dateMonth, dateDay} = req.body
            const employeeHasService = await EmployeeHasService.findOne({
                where: {
                    idEmployee: idEmployee,
                    idService: idService
                }
            })
            const serviceDuration = employeeHasService.duration
            const timeArray = []

            let startTimeHour = 10;
            let startTimeMinutes = 0;

            while (startTimeHour < 20) {
                while (startTimeMinutes >= 60) {
                    startTimeMinutes -= 60;
                    startTimeHour++;
                }

                const isLocked = await checkTime(idEmployee, idService, dateYear, dateMonth, dateDay, startTimeHour, startTimeMinutes);

                const timeSlot = {
                    time: `${startTimeHour.toString().padStart(2, '0')}:${startTimeMinutes.toString().padStart(2, '0')}`,
                    timeHours: startTimeHour,
                    timeMinutes: startTimeMinutes,
                    isLocked: isLocked,
                };

                timeArray.push(timeSlot);

                startTimeMinutes += serviceDuration;
            }

            return res.status(200).json(timeArray)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных."})
        }
    }

    async createPost(req, res) {
        try {
            const {idUser, idEmployee, idService, dateYear, dateMonth, dateDay, dateHours, dateMinutes} = req.body
            const employeeHasService = await EmployeeHasService.findOne({
                where: [
                    {
                        idEmployee: idEmployee
                    },
                    {
                        idService: idService
                    },
                ]
            })
            const candidate = await ServiceHistory.findOne({
                where: [
                    {
                        status: {
                            [Op.ne]: 'В ожидании'
                        }
                    },
                    {
                        idEmployeeHasService: employeeHasService.idEmployeeHasService
                    },
                    {
                        year: dateYear
                    },
                    {
                        month: dateMonth
                    },
                    {
                        day: dateDay
                    },
                    {
                        hours: dateHours
                    },
                    {
                        minutes: dateMinutes
                    },
                ]
            })

            if (candidate) {
                return res.status(400).json({message: "Выбранное время уже занято"})
            }

            await ServiceHistory.create({
                status: 'В ожидании',
                idUser: idUser,
                year: dateYear,
                month: dateMonth,
                day: dateDay,
                hours: dateHours,
                minutes: dateMinutes,
                idEmployeeHasService: employeeHasService.idEmployeeHasService
            })

            return res.status(200).json({message: "Вы успешно записаны на услугу"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка записи на услугу"})
        }
    }
}

module.exports = new timeController()