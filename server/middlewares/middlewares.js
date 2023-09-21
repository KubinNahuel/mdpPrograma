const middleware = async(req,res,next)=>{
    let numero=3
if(numero!=3){
    next(new Error("error numero es distinto"))
}else{
    next()
}
}

module.exports={
    middleware
}