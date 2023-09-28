const {Post}= require('../models/post.model.js')


const createPost = async (req,res)=>{
    try{
  const {id}= req.params
    
const modelData={
    userId: id,
    description: req.body.description,
}
        const response= await Post.create(modelData).
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

const getPost = async(req,res)=>{
    const response=await Post.findAll().then((data)=>{
    const res={error:false,data:data}
    return res
}).catch((e)=>{
    const res= {error: true, message: e}
    return res
})
res.json(response)
}
module.exports={
    createPost,
    getPost
}