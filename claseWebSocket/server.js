//socket.io
const express = require('express')
const app = express()
const {Server} = require('socket.io')
const {createServer} = require('node:http')
const port=3030
const server = createServer(app)

const io= new Server(server,{
    cors:{origin:'*'}
})

io.on('connection',(socket)=>{
   console.log('usuario se conecto')

socket.on('disconnect',()=>{
    console.log('un usuario se desconecto')
})
socket.on('chat message',(msg)=>{
    io.emit('chat message',msg)
})
})


app.get('/',(req,res)=>{
    res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(port, (req,res)=>{
    console.log('corriendo en ' + port)
})


