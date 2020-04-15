const {Sequelize} = require('sequelize')

const DB_NAME = 'todo-april'
const USER = 'debian-sys-maint'
const PASS = 'hSeD1G3I1iD13eQz'
const CONF = {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+03:00',
}

const sequelize = new Sequelize(DB_NAME, USER, PASS, CONF)

module.exports = sequelize
