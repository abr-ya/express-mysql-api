const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// получение списка задач
router.get('/', (req, res) => {
    res.json({text: 'get'})
})

// создание новой задачи
router.post('/', (req, res) => {

})

// изменение задачи
router.put('/:id', (req, res) => {

})

// удаление задачи
router.delete('/:id', (req, res) => {

})

module.exports = router
