const Router = require('express')
const router = new Router()
const controller = require("../Controllers/serviceController")

router.get('/allservices', controller.allServices)
router.get('/servicebyid/:idService', controller.getServiceById)
router.post('/addservice', controller.addService)
router.put('/editservice', controller.editService)
router.delete('/removeservice/:idService', controller.removeService)
router.get('/title/:idService', controller.getTitleById)

module.exports = router