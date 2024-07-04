const http = require('http');

const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;


const emitter = new EventEmitter()

class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = 'GET', path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path];

        if(endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже создан`)
        }

        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res)
        })
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }
    
    post(path, handler) {
        this.request('POST', path, handler)
    }

    put(path, handler) {
        this.request('PUT', path, handler)
    }

    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}

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