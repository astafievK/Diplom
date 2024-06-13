const Router = require('express')
const router = new Router()
const controller = require("../Controllers/imageController")

router.get('/get/:idImage', controller.getImage);
router.get('/getbyemployeeid/:idEmployee', controller.getImageByEmployeeId);
router.post('/uploademployeeavatar/:idEmployee', controller.uploadEmployeeAvatar);
router.post('/uploademployeework/:idEmployee', controller.uploadEmployeeWork);
router.delete('/removeemployeework/:idEmployee&:idImage', controller.removeEmployeeWork);
router.get('/getworks', controller.getWorks)
router.get('/getemployeeworks/:idEmployee', controller.getEmployeeWorks)

module.exports = router