const http = require('http');

const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;

const Router = require('./routes/router')

const emitter = new EventEmitter()

const router = new Router()

router.get('/users', (req, res) => {
    res.end(`Вы отправили запрос на ${req.url}`)
})

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })

    
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)

    if(!emitted) { // возвращает boolean значение
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Сервер запустился на пору ${PORT}`)
})