const middleware = async(req,res,next)=>{
    let numero=2
if(numero!=3){
    next(new Error(407))
}else{
    next()
}
}

module.exports={
    middleware
}