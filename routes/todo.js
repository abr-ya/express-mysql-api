const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// получение списка задач
router.get('/', async (req, res) => {
	try {
		const todos = await Todo.findAll()
		res.status(200).json(todos)
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
router.put('/:id', async (req, res) => {
	try {
		const item = await Todo.findByPk(+req.params.id)
		item.done = req.body.done
		await item.save()
		res.status(200).json({item}) // 200
	} catch (error) {
		console.log(error)
		res.status(500).json({message: 'Server error!'})
	}
})

// удаление задачи
router.delete('/:id', (req, res) => {

})

module.exports = router
