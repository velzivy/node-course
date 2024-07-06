const Router = require('../routes/router')
const userController = require('../src/user-controller')
const http = require('http')

const router = new Router();

router.get('/users', userController.getUsers)

router.post('/users', userController.createUsers)
module.exports = router