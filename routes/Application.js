const http = require('http');
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer()
        this.middleware = []
    }

    use(middleware) {
        this.middleware.push(middleware);
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method]
                this.emitter.on(this._getRouterMask(path, method), (req, res) => {
                    handler(req, res)
                })
            })
        })
    }

    _createServer() {
        return http.createServer((req, res) => {
            let body = "";
            req.on('data', (chunk) => {
                body += chunk;
            })

            req.on('end', () => {
                if(body) {
                    req.body = JSON.parse(body);
                }
                this.middleware.forEach(middleware => middleware(req, res))
                console.log(req.pathname)
                const emitted = this.emitter.emit(this._getRouterMask(req.pathname, req.method), req, res)
                if(!emitted) { // возвращает boolean значение
                    res.end()
                }
            })
        });
    }

    _getRouterMask(path, method) {
        return `[${path}]:[${method}]`
    }
}