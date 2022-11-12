//import squelize and schema
const Sequelize = require('sequelize')
const db = require('../config/db.config')
const employeemodel = require('./employee')
//create model
const employee = employeemodel(db,Sequelize)
// generate table in db
db.sync({force: false}).then(()=>{
    console.log('table created')
})

db.Employee = employee
module.exports = db //export db to use it in app.js 