// Readable - чтение
// Writable - запись
// Duplex - Для чтение и записи Readable + Writable 
// Tranform - Такие же как Duplex, но в момеент выполнение они могут изменять данные

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (error, data) => {
//     if(error) {
//         console.log(error)
//     }

//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {})

// один чанк по умолчанию 64кб
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => console.log('Чтение окончено'))
// stream.on('open', () => console.log('Чтение началось'))
// stream.on('error', (e) => console.log(e))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

// for(let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }

// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

http.createServer((req, res) => {
    // req - readable stream
    // req - writable stream

    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

    // Стрим закончит читать раньше чем пользователь 
    stream.pipe(res)
    res.on('data', chunk => res.write(chunk))
    res.on('end', () => res.end())
    res.on('error', (e) => res.json(e))
})