const Router = require('express')
const router = new Router()
const controller = require("../Controllers/employeeHasServiceController")

router.get('/allemployeehasservice', controller.allEmployeeHasService)
router.get('/employeehasservicebyid/:idEmployee&:idService', controller.employeeHasServiceById)
router.get('/employeeservices/:idEmployee', controller.getEmployeeServices)
router.post('/switchservice', controller.switchEmployeeService)
router.post('/isexists', controller.isEmployeeHasService)
router.put('/editemployee', controller.editEmployee)
router.get('/pricelist/:idService', controller.priceList)
router.put('/editprice', controller.editServicePrice)
router.put('/editduration', controller.editServiceDuration)

module.exports = router