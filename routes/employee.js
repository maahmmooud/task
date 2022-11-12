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



router.route('/:id')     //use "http://localhost:3000/employees/1"
.put((req,res)=>{
    const body= req.body
    const id =req.params.id
    db.Employee.update( body , {where: {id: id}})
    .then(employee=>{res.json(employee)})
    .catch((err)=> res.json(err.message))
    })   



.delete((req,res)=>{
        db.Employee.destroy({where: {id: req.params.id} })
        .then(employee=>{res.json(employee)})
        .catch((err)=> res.json(err.message))
    })
return router
}
