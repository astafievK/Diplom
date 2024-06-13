const Router = require('express')
const router = new Router()
const controller = require("../Controllers/roleController")

router.get('/allroles', controller.getRoles)

module.exports = router