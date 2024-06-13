const Employee = require('../Models/Employee')
const Service = require('../Models/Service')
const User = require('../Models/User')
const EmployeeHasService = require('../Models/EmployeeHasService')
const Role = require("../Models/Role");

class employeeHasServiceRouter {
    async allEmployeeHasService(req, res) {
        try {
            const data = await EmployeeHasService.findAll({});

            return res.json(data);
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async employeeHasServiceById(req, res) {
        try {
            const data = await EmployeeHasService.findOne(
                {
                    where: [
                        {
                            idEmployee: req.params.idEmployee
                        },
                        {
                            idService: req.params.idService
                        }
                    ],
                })

            if (!data) {
                return res.status(404).json({message: "Совпадений не найдено"})
            }

            return res.json(data);
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async getEmployeeServices(req, res) {
        try {
            const rows = await EmployeeHasService.findAll(
                {
                    where: [
                        {
                            idEmployee: req.params.idEmployee
                        }
                    ],
                }
            )

            const data=[]

            for (const row of rows) {
                const service = await Service.findByPk(row.idService);

                data.push({
                    idEmployee: row.idEmployee,
                    idService: row.idService,
                    title: service.title,
                });
            }

            if (!data) {
                return res.status(404).json({message: "Совпадений не найдено"})
            }

            return res.json(data);
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async switchEmployeeService(req, res) {
        try {
            const {idEmployee, idService} = req.body

            const candidate = await EmployeeHasService.findOne({
                where: [
                    {
                        idEmployee: idEmployee
                    },
                    {
                        idService: idService
                    }
                ]
            })

            const service = await Service.findByPk(idService)

            if (candidate) {
                await candidate.destroy()
                return res.status(200).json({message: "Услуга успешно удалена"})
            }

            await EmployeeHasService.create({
                idEmployee: idEmployee,
                idService: idService,
                price: service.price,
                duration: service.duration
            })

            return res.status(200).json({message: "Услуга успешно добавлена"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка добавления услуги"})
        }
    }

    async isEmployeeHasService(req, res) {
        try {
            const {idEmployee, idService} = req.body

            const employeeHasService = await EmployeeHasService.findOne({
                where: [
                    {
                        idEmployee
                    },
                    {
                        idService
                    }
                ]
            })


            if (employeeHasService) {
                return res.status(200).json({
                    isExists: true,
                    price: employeeHasService.price,
                    duration: employeeHasService.duration
                })
            }

            return res.status(200).json({isExists: false})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Серверная ошибка при получении информации"})
        }
    }

    async editEmployee(req, res) {
        try {
            const {idEmployee, name, surname, patronymic, experience} = req.body
            const employee = await Employee.findByPk(idEmployee)
            const user = await User.findOne({where: {idEmployee: idEmployee}})

            if (!user || !employee) {
                res.status(400).json({message: "Пользователь или работник не найдены"})
            }

            await user.update({
                name: name,
                surname: surname,
                patronymic: patronymic
            })

            await employee.update({
                experience: experience
            })

            await user.save()
            await employee.save()

            return res.status(200).json({message: "Данные успешно изменены"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Серверная ошибка при получении информации"})
        }
    }

    async editServicePrice(req, res) {
        try {
            const {idService, idEmployee, price} = req.body

            const candidate = await EmployeeHasService.findOne({
                where: [
                    {
                        idService: idService
                    },
                    {
                        idEmployee: idEmployee
                    }
                ]
            })

            if (!candidate) {
                return res.status(404).json({message: "Услуга не найдена"})
            }

            await candidate.update({
                price: price
            })

            await candidate.save()

            return res.status(200).json({message: "Стоимость услуги успешно изменена"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка при изменении стоимости услуги"})
        }
    }

    async editServiceDuration(req, res) {
        try {
            const {idService, idEmployee, duration} = req.body

            const candidate = await EmployeeHasService.findOne({
                where: [
                    {
                        idService: idService
                    },
                    {
                        idEmployee: idEmployee
                    }
                ]
            })

            if (!candidate) {
                return res.status(404).json({message: "Услуга не найдена"})
            }

            await candidate.update({
                duration: duration
            })

            await candidate.save()

            return res.status(200).json({message: "Длительность услуги успешно изменена"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка при изменении длительности услуги"})
        }
    }

    async priceList(req, res) {
        try {
            const idService = req.params.idService;
            const data = [];
            const rows = await EmployeeHasService.findAll({
                where: {idService: idService},
            });


            for (const row of rows) {
                const service = await Service.findByPk(idService);
                const employee = await Employee.findByPk(row.idEmployee);
                const user = await User.findOne({where: {idEmployee: row.idEmployee}});

                data.push({
                    idEmployee: employee.idEmployee,
                    idService: service.idService,
                    name: user.name,
                    surname: user.surname,
                    price: row.price
                });
            }

            data.sort((a, b) => a.surname.localeCompare(b.surname));

            return res.status(200).json(data);
        } catch (e) {
            console.log(e);
            return res.status(400).json({message: "Ошибка получения данных"});
        }
    }
}

module.exports = new employeeHasServiceRouter()