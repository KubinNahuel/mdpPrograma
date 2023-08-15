import React, { useEffect, useRef, useState } from "react";
import { Card } from "./cards";

export function PrimerComponente(){

const [objetos,setObjetos]=useState();


const cambiarPersona =()=>{
    enano.current="alto"
    console.log(enano)
    }
const enano= useRef("enano")

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').
    then(response=>
    response.json()
    ).then((data)=>{
    console.log(data)
    setObjetos(data)
    }).
    catch((err)=>{
    console.log(err)
    }) 
},[])


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
    <button onClick={cambiarPersona}>Cambiar</button>
    <div > 
    </div>
    
    </>
)
}


