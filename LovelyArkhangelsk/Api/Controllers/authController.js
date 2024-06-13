const bcrypt = require("bcrypt");
const User = require('../Models/User')
const Role = require('../Models/Role')
const Employee = require('../Models/Employee')

class authController{
    async registration(req, res) {
        try {
            const {phoneNumber, password, confirmPassword, name, surname, patronymic} = req.body
            const candidate = await User.findOne({where: {phoneNumber: phoneNumber}})

            if (candidate) {
                return res.status(400).json({message: "Учетная запись на такой номер телефона уже существует"})
            }

            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({where: {title: 'Клиент'}});

            const user = new User({
                phoneNumber: phoneNumber,
                password: hashPassword,
                name: name,
                surname: surname,
                patronymic: patronymic,
                idRole: userRole.idRole
            })

            await user.save()

            return res.status(200).json({message: "Учетная запись успешно создана"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка регистрации"})
        }
    }

    async login(req, res){
        try{
            const {phoneNumber, password} = req.body
            const user = await User.findOne({
                where: {phoneNumber: phoneNumber},
                include: [
                    {
                        model: Role,
                    },
                    {
                        model: Employee,
                    }
                ],
            })

            if(!user){
                return res.json({message: "Ошибка авторизации. Проверьте корректность данных"})
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if(!validPassword){
                return res.status(400).json({message: "Ошибка авторизации. Проверьте корректность данных"})
            }

            return res.json({user})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Ошибка авторизации. Проверьте корректность данных"})
        }
    }
}

module.exports = new authController()