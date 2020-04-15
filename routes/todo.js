const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// получение списка задач
router.get('/', (req, res) => {
	try {
		res.json({text: 'get'})		
	} catch (error) {
		console.log(error)
		res.status(500).json({message: 'Server error!'})
	}
})

// создание новой задачи
router.post('/', async (req, res) => {
	try {
		const newItem = await Todo.create({
			title: req.body.title,
			done: false
		})
		res.status(201).json({newItem}) // 201 - был создан
	} catch (error) {
		console.log(error)
		res.status(500).json({message: 'Server error!'})
	}
})

// изменение задачи
router.put('/:id', (req, res) => {

})

// удаление задачи
router.delete('/:id', (req, res) => {

})

module.exports = router
