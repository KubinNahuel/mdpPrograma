import express from "express"

const app= express()

app.use(express.json())

app.get('/tarea',(req,res)=>{
res.send([])
})

app.get('actividad',(req,res)=>{
    res.send('actividad completada')
})
app.post('/tarea',(req,res)=>{
    const {title,description} = req.body
    if(!title || !description){
        res.status(400)
    }
    res.json({
        title:'titulo',
        description:'description',
        id:1
    })
})
export default app