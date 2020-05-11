const {Sequelize} = require('sequelize')

const DB_NAME = process.env.DB_NAME
const USER = process.env.DB_USER
const PASS = process.env.DB_PASS
const SERV = process.env.DB_SERV
const CONF = {
    host: SERV,
    dialect: 'mysql',
    timezone: '+03:00',
}

console.log(DB_NAME, USER, PASS, CONF)

if (!(SERV && DB_NAME && USER && PASS)) {   
    console.log('Не хватает данных для соединения с БД!')
}
const sequelize = new Sequelize(DB_NAME, USER, PASS, CONF)
module.exports = sequelize
