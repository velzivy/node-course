const PORT = process.env.PORT || 5000;
const Application = require('./routes/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./parseJson')

const app = new Application()

app.use(jsonParser)
app.addRouter(userRouter)


app.listen(PORT, () => {
    console.log(`Сервер запустился на пору ${PORT}`)
})