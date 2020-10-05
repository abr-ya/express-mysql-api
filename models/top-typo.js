const {Sequelize} = require('sequelize')
const database = require('../utils/database')

const topTypo = database.define('TopTypo', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	score: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
})

module.exports = topTypo
