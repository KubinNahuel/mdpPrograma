const {User} = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
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
    let rol = 0;
    let urlImage;
    if (req.file == undefined) {
      urlImage = null;
    } else {
      const url = req.protocol + "://" + req.get("host");
      urlImage = url + "/uploads/" + req.file.filename;
      rol = 1;
    }
    
    const modelData={
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    description: req.body.description,
    gender: req.body.gender,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    Image: urlImage,
    role:rol
}
        const response= await User.create(modelData).
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

const login = async(req,res)=>{
    try{
        console.log(req.body)
        User.findOne({
            where:{
                email: req.body.email
            }
        }).then((user)=>{


            if(!user){
    return res.status(401).send({message: "ERROR user not found"})
}

const validPassword= bcrypt.compareSync(
    req.body.password,
    user.password
)

if(!validPassword){
    return res.status(401).send({message: "ERROR user not found 2"})
}

res.status(200).send({user})
        })


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
    login,
    createUser,
    getUser,
    getUserById,
    editUser,
    deleteUser
}