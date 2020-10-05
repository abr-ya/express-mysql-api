const {Router} = require('express')
const TopTypo = require('../models/top-typo')
const router = Router()

// получение списка результатов
router.get('/', async (req, res) => {
	try {
		const scores = await TopTypo.findAll()
		res.status(200).json(scores)
	} catch (error) {
		console.log(error)
		res.status(500).json({message: 'Server error!'})
	}
})

// запись результата
router.post('/', async (req, res) => {
	try {
		console.log(req.body)
		const newItem = await TopTypo.create({
			name: req.body.name,
			score: req.body.score,
		})
		res.status(201).json(req.body) // 201 - был создан
	} catch (error) {
		console.log(error)
		res.status(500).json({message: 'Server error!'})
	}
})

module.exports = router
