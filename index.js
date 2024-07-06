const http = require('http');

const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;

const Router = require('./routes/router')
const Application = require('./routes/Application')

const emitter = new EventEmitter()

const app = new Application()

const router = new Router()

router.get('/users', (req, res) => {
    res.end(`Вы отправили запрос на ${req.url}`)
})

app.addRouter(router)

app.listen(PORT, () => {
    console.log(`Сервер запустился на пору ${PORT}`)
})