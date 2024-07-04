const Emitter = require('events')

const emitter = new Emitter();

// document.addEventListener('click')

emitter.on('message', (data, second) => {
    console.log('Вы прислали сообщение ' + data)
    console.log('Второй аргумент ' + second)
})

const AUTHORNAME = process.env.authorName || '';

if(AUTHORNAME) {
     emitter.emit('message', AUTHORNAME, 123)
} else {
    emitter.emit('message','Вы не указали сообщение!')
}

emitter.once('sayHi', (userName) => {
    console.log('Привет!, ' + userName)
})

const callback = (userName) => {
    console.log('Пока!, ' + userName)
}

emitter.once('sayBuye', callback)


emitter.emit('sayHi', 'Fymryn')
emitter.emit('sayHi', 'Fymryn')
emitter.emit('sayHi', 'Fymryn')

emitter.removeListener('message')
emitter.removeAllListeners('sayBuye', callback)

// Когда удобно использовать?
// http
// websockets
// long pulling
// clusters