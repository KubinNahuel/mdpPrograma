const jwt= require('jsonwebtoken')
require('dotenv').config()

const middleware = async(req,res,next)=>{
const accessToken = req.headers['authorization']
if(!accessToken){
    res.send('Access denied')
}


jwt.verify(accessToken,process.env.PASSWORDTOKEN, (err, user)=>{
    if(err){
        res.send('token invalid or expired')
    }else{
        next()
    }
})
}

module.exports={
    middleware
}