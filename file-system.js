const fs = require('fs')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir0', 'dir2', 'dir3'), {recursive: true})


// console.log('start')

// fs.mkdir(path.resolve(__dirname, 'dir'), (error) => {
//     if(error) {
//      return console.log(error)
//     }

//     console.log('папка создана!')
// })

// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'dir'), (error) => {
//     if(error) {
//         throw error;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'qwerty123123 42 23', (error) => {
//     if(error) {
//         throw(error)
//     }
//     console.log('Файл записан.')
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), ' + строка в конец!', (error) => {
//     if(error) {
//         throw(error)
//     }
//     console.log('В файл добавленны данные')
// })

// fs.writeFiles(path.resolve(__dirname, 'test.txt'), 'qwerty123123 42 23', (error) => {
//     if(error) {
//         throw(error)
//     }
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), ' + строка в конец!', (error) => {
//         if(error) {
//         throw(error)
//     }
//     console.log('В файл добавленны данные')
// })

//     console.log('Файл записан.')
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (error) => {
            if(error) {
                reject(error)
            }

            resolve()
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (error) => {
            if(error) {
                reject(error)
            }

            resolve()
        })
    })
}

// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'hello')
// .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' иди нахуй!'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' иди нахуй!'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' иди нахуй!'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' иди нахуй!'))
// .catch((error) => console.log(error))

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (error) => {
            if(error) {
                reject(error)
            }

            resolve('Файл был удалён!')
        })
    })
}

removeFileAsync(path.resolve(__dirname, 'text.txt'))
.then((result) => console.log(result))