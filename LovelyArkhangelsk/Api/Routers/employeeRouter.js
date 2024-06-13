const Router = require('express')
const router = new Router()
const controller = require("../Controllers/employeeController")

router.get('/allemployees', controller.allEmployees)
router.delete('/deleteemployee/:idEmployee', controller.deleteEmployee)
router.get('/employeebyid/:idEmployee', controller.getEmployeeById)
router.put('/editemployee', controller.editEmployee)
router.get('/employeesbyservice/:idService', controller.getEmployeesByServiceId)

module.exports = router