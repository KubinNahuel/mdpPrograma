function promesa(){
    return new Promise(function(resolve,reject){
setTimeout(()=>{
if(true){
resolve("Se ha resuelto correctamente");
}else{
reject(new Error("ERROR"));
}
},5000)
    })
}


promesa().then((response)=>{
console.log(response)
}).catch((err)=>{
    console.log(err.message)
})