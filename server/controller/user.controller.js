const {User} = require('../models/user.model.js')

const getUser = async(req,res)=>{
    const response=await User.findAll().then((data)=>{
    const res={error:false,data:data}
    return res
}).catch((e)=>{
    const res= {error: true, message: e}
return res
})
res.json(response)
}

const getUserById= async (req,res)=>{
    try{
        const name = req.params.name;
        const age = req.params.age;
        const response = await User.findAll({
            where:{
            id:req.params.id
        }
    }).then((data)=>{
            const res= {error: false, data: data ,message: "usuario encontrado"}
            return res
        }).catch((e)=>{
            const res= {error: true, message: e}
            return res
        })
        console.log(name,age)
        res.json(response)
    }catch(e){
console.log(e)
    }
}
const editUser=async(req,res)=>{
    try{
        const {id}= req.params
        const response= await User.update(req.body,{where:{
    id:id
}})
.then((data)=>{
    const res= {error: false, data: data ,message: "usuario editado"}
    return res
})
.catch((e)=>{
    const res= {error: true, message: e}
    return res
})
        res.json(response)
    }catch(e){
        console.log(e)
    }
}
const createUser = async (req,res)=>{
    try{
const modelData={
    name:req.body.name,
    lastName: req.body.lastName,
    age: req.body.age
}
        const response= await User.create(modelData).
then((data)=>{
    const res={ error: false, data:data, message: 'Usuario Creado'}
        return res
    })
        .catch((e)=>{

            const res= {error:true, message: e}
            return res

        })

        res.json(response)

    }catch(e){

        console.log(e)

    }
}

const deleteUser = async(req,res)=>{
    try{
        const {id}= req.params;
        const response = await User.destroy({
            where:{
                id:id
            }
        })
        .then((data)=>{
            const res= {error: false, message:"usuario eliminado"}
            return res
        }).catch((e)=>{
            const res= {error: true, message:e}
            return res
        })

        res.json(response)
    }catch(e){
console.log(e)
    }
}
module.exports={
    createUser,
    getUser,
    getUserById,
    editUser,
    deleteUser
}