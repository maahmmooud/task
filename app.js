// require important modules
const express =require('express')
const bodyparser =require('body-parser')

const app =express()

const createdb = require('./model/index')       // exports db to router function
const emprouter =require('./routes/employee')  // to access db in router level
const createmp =emprouter(createdb)


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use('/employees',createmp)
app.use('/',(req,res)=>{
    res.send('hello')
})


app.listen(3000,(err)=>{
    console.log(err)
    console.log('server listen on port 3000')
})


// db.authenticate()
// .then(()=>{
//     console.log('Connection has been established successfully.')
// })
// .catch(err=>{
//     console.error('Unable to connect to the database:', err)

// })
