const express= require('express')
const mongoose = require('mongoose')
const app = express ()
mongoose.connect('mongodb://gamer:password@ejemplo:27017/miapp?authSource=admin')

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    age: Number
}))

mongoose.connection.on('open',_=>{
    console.log("is connected")
})

mongoose.connection.on('error',err=>{
    console.log("error")
})

app.get('/', async (req,res) =>{
    console.log('listando')
    const user = await User.find()
    return res.send(user)
})

app.get('/post', async (req,res)=>{
    console.log('creando')
    await User.create({name: 'rodrigo', age:5})
    return res.send('se creo')
})

app.listen(3000, () => console.log('listening'))