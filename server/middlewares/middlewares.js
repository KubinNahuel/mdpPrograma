const jwt= require('jsonwebtoken')
require('dotenv').config()

const middleware = async(req,res,next)=>{
const accessToken = req.headers['authorization']
if(!accessToken){
    res.send('Access denied')
}else{
    jwt.verify(accessToken,process.env.PASSWORDTOKEN, (err, user)=>{
        if(err){
            res.send('token invalid or expired')
        }else{
            next()
        }
    })
}
}

const validateRequest = async (req, res, next, schema)=>{
const option ={
    abortEarly: false,
    allowUnknown: true
}

const {error, value} = schema.validate(req.body, option)
if(error){
    console.log(error)
    res.status(400).json({message: `${error.details.map(x=>x.message).join('')}`})
}else{
    next()
}


}
module.exports={
    middleware,
    validateRequest
}