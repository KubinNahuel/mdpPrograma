import { useEffect, useRef, useState } from "react"
import { Card } from "./cards"

export function Landing(){
    const [estado,setEstado]=useState([{}]);
    const [estadoRef, setEstadoRef]= useState(0)
    const cambiar=()=>{
        setEstadoRef(estadoRef+1)
    }
    const nombre= useRef("carlos")
    const cambiarNombre=()=>{
        nombre.current="julian";
        console.log(nombre)
    }
    console.log(nombre)
    // useEffect(()=>{
    //    fetch('https://jsonplaceholder.typicode.com/posts')
    //    .then(resp=>
    //     resp.json()
    //    ).then((data)=>{
    //     setEstado(data)
    // }
    //    ).catch((err)=>{
    //     console.log(err)
    //    })
    // },[])
    
    return(


        
        <div className="cardContainer">
<h1>{nombre.current}</h1>
<button onClick={cambiarNombre}>Cambiar nombre</button>
            <h1>{estadoRef}</h1>
            <button onClick={cambiar}>sumar</button>
   {/* {estado.map((elem)=>{
    return(
        <Card name={elem.title} age={elem.body} id={elem.id}/>
    )
   })}*/}
        </div>
    )
}