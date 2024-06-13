const Service = require('../Models/Service')
const Image = require("../Models/Image");

class serviceController{
    async allServices(req, res){
        try{
            const services = await Service.findAll()

            return res.json(services)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка получения данных"})
        }
    }

    async addService(req, res){
        try{
            const {title, description, duration, price} = req.body
            const imageDefault = await Image.findOne({where: {path: 'no-photo.jpg'}})
            const imageDefaultId = imageDefault.idImage;

            if(title.trim().length === 0 || duration <= 0 || price <= 0){
                return res.status(400).json({message: "Ошибка валидации услуги"})
            }

            const service = await Service.findOne({where: {title: title}})

            if(service){
                return res.status(400).json({message: "Данная услуга уже существует"})
            }

            await new Service({
                title: title,
                description: description,
                duration: duration,
                price: price,
                idImage: imageDefaultId
            }).save()

            return res.status(200).json({message: "Услуга успешно создана"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка добавления услуги"})
        }
    }

    async getServiceById(req, res) {
        try {
            const idService = req.params.idService
            const service = await Service.findByPk(idService)

            if (!service) {
                return res.status(400).json({message: "Услуга не найдена"})
            }

            return res.status(200).json(service)
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Ошибка получения услуги"})
        }
    }

    async editService(req, res){
        try{
            const {idService, title, description, duration, price} = req.body

            const service = await Service.findByPk(idService)

            if(!service){
                return res.status(404).json({message: "Услуга не найдена"})
            }

            await service.update({
                title: title,
                description: description,
                duration: duration,
                price: price,
            })

            await service.save()

            return res.status(200).json({message: "Услуга успешно изменена"})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Ошибка изменения услуги"})
        }
    }

    async removeService(req, res){
        try{
            const idService = req.params.idService
            const service = await Service.findByPk(idService)

            if(!service){
                return res.status(404).json({message: "Услуга не найдена"})
            }

            await service.destroy()

            return res.status(200).json({message: "Услуга успешно удалена"})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Ошибка удаления услуги"})
        }
    }

    async getTitleById(req, res){
        try{
            const service = await Service.findByPk(req.params.idService)
            return res.status(200).json({title: service.title})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Ошибка получения данных об услуге"})
        }
    }
}

module.exports = new serviceController()