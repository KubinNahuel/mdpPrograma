import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card } from "./cards";
import { Link } from "react-router-dom";


export function PrimerComponente(){

const [estado,setEstado]=useState(0);
const [estado2,setEstado2]=useState(0);



const cambiarEstado =()=>{
    console.log(estado)
    setEstado(estado + 1)
}

const cambiarPersona =()=>{
    enano.current="alto"
    console.log(enano)
    }

    const enano= useRef("enano")






const llamada= useCallback(()=>{
    cambiarEstado()
    
},[estado2])




// useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts').
//     then(response=>
//     response.json()
//     ).then((data)=>{
//     console.log(data)
//     setObjetos(data)
//     }).
//     catch((err)=>{
//     console.log(err)
//     }) 
// },[])


//  const persona= [
//     {
//     name:"Carlos",
//     age:36,
//     body:"Flaco"
//  },{
//     name:"Maria",
//     age:3,
//     body:"alto"
//  },{
//     name:"Mario",
//     age:40,
//     body:"bajo"
//  }]
 
return(
    <>
    <h1>{enano.current}</h1>
    <button onClick={llamada}>suma</button>
    <h1>{estado}</h1>
  
    <div > 
    </div>
    </>
)
}


