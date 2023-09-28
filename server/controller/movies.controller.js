const {Movies}= require('../models/movies.model.js')

const {User}= require('../models/user.model.js')



const createMovie = async (req,res)=>{
    try{
        const modelData={
            title:''
        }
        const response= await Movies.create(modelData).
        then((data)=>{
            const res={ error: false, data:data, message: 'Usuario Creado'}
        return res
    }).catch((e)=>{
            const res= {error:true, message: e}
            return res

        })
        res.json(response)
    }catch(e){
        console.log(e)
    }
}


const getMovies = async(req,res)=>{
    const response= await Movies.findAll({
        include: User
    }).then((data)=>{
    const res={error:false,data:data}
    return res
}).catch((e)=>{
    const res= {error: true, message: e}
    return res
})
res.json(response)
}
const getMoviesById= async (req,res)=>{
    try{
        const response = await Movies.findOne({
            where:{
            id:req.params.id
        },
        include:[//incluimos las tablas que contengan una llave foranea identificatoria de usuario
        {
            model: User
        }
    ]
    }).then((data)=>{
            const res= {error: false, data: data ,message: "pelicula encontrada"}
            return res
        }).catch((e)=>{
            const res= {error: true, message: e}
            return res
        })
       
        res.json(response)
    }catch(e){
console.log(e)
    }
}

module.exports={
    createMovie,
    getMovies,
    getMoviesById
}