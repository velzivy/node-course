const dotenv = require('dotenv')
dotenv.config()

console.log(process.pid)

console.log(process.env.NODE_ENV)
console.log(process.env.PORT)