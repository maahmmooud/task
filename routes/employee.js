const express = require('express')
const router = express.Router()


module.exports = (db)=>{
router.route('/')    //use "http://localhost:3000/employees"
.get((req,res)=>{
    
    db.Employee.findAll()
    .then(employee=>{res.json(employee)})
    .catch((err)=> res.json(err.message))

})

.post((req,res)=>{
    let body =req.body
    db.Employee.create(body)
    .then(employee=>{res.json(employee)})
    .catch((err)=> res.json(err.message)) 
})




return router
}
