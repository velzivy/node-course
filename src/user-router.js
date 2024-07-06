const Router = require('../routes/router')
const http = require('http')

const router = new Router();

const users = [
    {id: 1, name: 'Fymryn'},
    {id: 2, name: 'Hutaomainer'},
]

router.get('/users', (req, res) => {
    console.log(req.params);
    res.send(users);
})

router.post('/users', (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.send(req.body);
})

module.exports = router