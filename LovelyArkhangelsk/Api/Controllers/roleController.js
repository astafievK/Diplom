const Role = require('../Models/Role')

class roleController{
    async getRoles(req, res){
        try{
            const roles = await Role.findAll()

            return res.json(roles)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных."})
        }
    }
}

module.exports = new roleController()