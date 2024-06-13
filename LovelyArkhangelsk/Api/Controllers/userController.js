const User = require('../Models/User')
const Role = require('../Models/Role')
const Image = require('../Models/Image')
const Employee = require("../Models/Employee");

class userController {
    async allUsers(req, res) {
        try {
            const users = await User.findAll({
                include: [
                    {
                        model: Role
                    },
                    {
                        model: Employee
                    }
                ]
            });

            return (res.json(users))
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.param('idUser'), {
                include: {
                    model: Employee
                }
            });

            return (res.json(user))
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async getUserByEmployeeId(req, res) {
        try {
            const user = await User.findOne(
                {
                    where:
                        {
                            idEmployee: req.params.idEmployee
                        },
                    include: {
                        model: Employee
                    }
                });

            return (res.json(user))
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async setUserRole(req, res) {
        try {
            const {idUser, idRole} = req.body;
            const user = await User.findByPk(idUser);
            const imageDefault = await Image.findOne({where: {path: 'no-photo.jpg'}})
            const imageDefaultId = imageDefault.idImage;
            const roleMaster = await Role.findOne({where: {title: 'Мастер'}});
            const roleMasterId = roleMaster.idRole

            if (!user) {
                res.status(400).json({message: "Ошибка обновления роли. Пользователь не найден"});
            }

            if (user.idRole !== idRole) {

                // Мастер -> Мастер
                if (user.idRole === roleMasterId && idRole === roleMasterId) {
                    return res.json({message: "Роль успешно изменена"});
                }

                // Не Мастер -> Мастер
                if (user.idRole !== roleMasterId && idRole === roleMasterId) {
                    try {
                        const newEmployee = new Employee({
                            experience: 0,
                            idImage: imageDefaultId,
                        });

                        await newEmployee.save();

                        user.set({
                            idRole: idRole,
                            idEmployee: newEmployee.idEmployee,
                        })

                    } catch (error) {
                        console.log(error);
                        return res.json({message: "Ошибка создания профиля мастера"});
                    }
                }

                // Мастер -> Не Мастер
                if (user.idRole === roleMasterId && idRole !== roleMasterId) {
                    if (user.idEmployee) {
                        await Employee.destroy({where: {idEmployee: user.idEmployee}});
                    }

                    user.set({
                        idRole: idRole
                    })
                }

                await user.save();
            }

            return res.status(200).json({message: "Роль успешно обновлена"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Ошибка обновления роли"});
        }
    }

    async deleteUser(req, res) {
        try {
            const {idUser} = req.body
            const user = await User.findByPk(idUser)

            if(!user){
                return res.status(400).json({message: "Пользователь не найден"})
            }

            await user.destroy();

            return res.status(200).json({message: "Пользователь успешно удален"})
        } catch (e) {
            res.status(400).json({message: "Ошибка удаления пользователя"})
        }
    }
}

module.exports = new userController()