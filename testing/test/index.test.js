import request from 'supertest'
import app from '../src/app.js'


describe('GET /tarea',()=>{
    test('deberia responder con un codigo 200', async() => { 
        const response = await request(app).get('/tarea').send()
        expect(response.statusCode).toBe(200)
     })

     test('deberia responder con un array',async()=>{
        const response = await request(app).get('/tarea').send()
        expect(response.body).toBeInstanceOf(Array)
     })
})

describe('POST /tarea',()=>{
    test('deberia responder con un codigo 200', async() => { 
        const response = await request(app).post('/tarea').send()
        expect(response.statusCode).toBe(200)
     })

    
     test('deberia responder con un codigo 400 si falta descripcion o titulo', async()=>{
        const objeto=[{

        },{
            title:'a',
    description: 'a'
        },{
            description: 'a'
        }]

        for(const body of objeto){
            const response = await request(app).post('/tarea').send(body)
            expect(response.statusCode).toBe(400)
        }
        
     } )
     test('deberia estar un id definido', async()=>{
        const response = await request(app).post('/tarea').send()
        expect(response.body.id).toBeDefined()
     } )
     
    describe('Contenido de header',()=>{
        test('deberia tener un header application/json',async()=>{
            const response = await request(app).post('/tarea').send()
            expect(response.header['content-type']).toBe('application/json; charset=utf-8')
             expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

     })
})