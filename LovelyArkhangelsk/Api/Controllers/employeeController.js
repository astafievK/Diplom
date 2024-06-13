const Employee = require('../Models/Employee')
const User = require('../Models/User')
const EmployeeHasService = require('../Models/EmployeeHasService')
const {Op} = require("sequelize");
const Service = require("../Models/Service");

class employerRouter {
    async allEmployees(req, res) {
        try {
            const employees = await User.findAll({where: {idEmployee: {[Op.ne]: null}}, include: [Employee]});

            return res.json(employees);
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async deleteEmployee(req, res) {
        try {
            const idEmployee = req.params.idEmployee
            const employee = await Employee.findByPk(idEmployee)
            const user = await Employee.findOne({where: { idEmployee: idEmployee}})

            await employee.destroy({where: {idEmployee: idEmployee}})

            return res.status(200).json({message: "Мастер успешно удален"});
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка удаления мастера"})
        }
    }

    async getEmployeeById(req, res) {
        try {
            const employee = await User.findOne({where: {idEmployee: req.params.idEmployee}, include: [Employee]});

            return res.json(employee);
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async editEmployee(req, res) {
        try {
            const {idEmployee, name, surname, patronymic, experience} = req.body

            const user = await User.findOne({where: {idEmployee: idEmployee}})
            const employee = await Employee.findByPk(idEmployee);

            if(!user || !employee) {
                return res.status(400).json({message: "Ошибка изменения данных"})
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

            res.status(200).json({message: "Данные успешно изменены"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async getEmployeesByServiceId(req, res){
        try {
            const idService = req.params.idService
            const rows = await EmployeeHasService.findAll({where: {idService: idService}});
            const data = []

            for (const row of rows) {
                const user = await User.findOne({ where: { idEmployee: row.idEmployee } });

                data.push({
                    idEmployee: row.idEmployee,
                    name: user.name,
                    surname: user.surname,
                    patronymic: user.patronymic
                });
            }

            return res.json(data);
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }
}

module.exports = new employerRouter()