const express =require('express');

const sequelize = require('./config/database/dbsequelize')
const cors = require('cors')
const server= express()
const {Movies}= require('./models/movies.model')
const {User}= require('./models/user.model')
const port = 3030;
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }));
//Nos permite establecer la carpeta de uploads como carpeta estatica, lo que permite buscar la imagen desde el front
server.use("/uploads", express.static("uploads"));
server.use('/user', require('./routes/user.routes'))
server.use('/post', require('./routes/post.routes'))

server.use('/movies', require('./routes/movies.routes'))




server.use('uploads',express.static("uploads"))

server.get('/',function(req,res){
    res.send("hola")
})


sequelize.sync({force: true}).then(()=>{
    console.log("Nos conectamos a la base de datos");
}).then(async(data)=>{
    //creamos datos ya establecidos
const movie1= await Movies.create({
    title: 'erase una vez en hollywood',
    users:{
        name:'monica',
        email: 'monica@gmail.com'
    }
},
{
    include: User
})

const movie2= await Movies.create({
    title: 'pulp fiction',
    users:{
        name:'monica2',
        email: 'monica2@gmail.com'
    }
},
{
    include: User
})
// User.addMovie()
// Movies.addUser()
let user1= await User.create({
    name:'fernandez',
    email: 'fernandez@gmail.com',
    
})

let user2= await User.create({
    name:'rodrigo',
    email: 'rodrigo@gmail.com'
})

movie1.addUser([user1,user2])

let user3= await User.create({
    name:'julian',
    email: 'julian@gmail.com'
})
user3.addMovies(movie1)

let user4= await User.create({
    name:'julian2',
    email: 'julian2@gmail.com'
})

movie2.addUser([user2,user1, user4])
})
.catch(error =>{
    console.log('Se ha producido un error',error);
}) 


server.listen(port, function(){
    console.log("server corriendo en puerto " + port)
})