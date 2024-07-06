const Router = require('../routes/router')
const http = require('http')

const router = new Router();

const users = [
    {id: 1, name: 'Fymryn'},
    {id: 2, name: 'Hutaomainer'},
]

router.get('/users', (req, res) => {
    res.send(users);
})

module.exports = router