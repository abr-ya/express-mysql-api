const express = require('express')
const path = require('path')
const database = require('./utils/database')
const todoRoutes = require('./routes/todo')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public'))) // делаем папку статической
app.use(express.json())
app.use('/api/todo', todoRoutes)

app.use((req, res, next) => {
		res.sendFile('/index.html')
})

async function start() {
	try {
		await database.sync() // {force: true} - форсированно переписать
		app.listen(PORT)
	} catch (error) {
		console.log(error)
	}
}

start()
