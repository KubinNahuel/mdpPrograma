const express =require('express');

const sequelize = require('./config/database/dbsequelize')
const cors = require('cors')
const server= express()


const port = 3030;

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use('/user', require('./routes/user.routes'))
server.use('uploads',express.static("uploads"))

server.get('/',function(req,res){
    res.send("hola")
})

sequelize.sync({force: false}).then(()=>{
    console.log("Nos conectamos a la base de datos");
}).catch(error =>{
    console.log('Se ha producido un error',error);
}) 


server.listen(port, function(){
    console.log("server corriendo en puerto " + port)
})