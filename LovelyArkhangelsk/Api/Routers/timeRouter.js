const Router = require('express')
const router = new Router()
const controller = require("../Controllers/timeController")

router.post('/getdates', controller.getDates)
router.post('/gettime', controller.getTime)
router.post('/createpost', controller.createPost)

module.exports = router