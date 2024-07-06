const PORT = process.env.PORT || 5000;
const Application = require('./routes/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./parseJson')
const parseUrl = require('./parseUrl')
const app = new Application()

app.use(jsonParser)
app.use(parseUrl)

app.addRouter(userRouter)


app.listen(PORT, () => {
    console.log(`Сервер запустился на пору ${PORT}`)
})