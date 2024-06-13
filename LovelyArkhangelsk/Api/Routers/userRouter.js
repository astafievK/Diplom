const Router = require('express')
const router = new Router()
const controller = require("../Controllers/userController")

router.get('/allusers', controller.allUsers)
router.get('/userbyid/:idUser', controller.getUserById)
router.get('/userbyemployeeid/:idEmployee', controller.getUserByEmployeeId)
router.put('/setuserrole', controller.setUserRole)
router.delete('/deleteuserbyid', controller.deleteUser)

module.exports = router