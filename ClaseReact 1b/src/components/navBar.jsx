import { useState } from "react";

function NavBar(props){
   
    return(
        <>
           <h1>{props.persona.edad}</h1>
        </>
    )
}

export function Footer(){
    const [estado, setEstado]= useState("");
    const persona={
        name:"rodrigo",
        edad: 35
    };
    const alerta=()=>{
        alert("se envio")
    }
    const cambiar=(e)=>{
        setEstado(e)
    }
    return(
        <>
        <NavBar persona={persona}/>
        <button onClick={alerta}>Enviar</button>
        <input onChange={(e)=> cambiar(e.target.value)}></input>
        <h1>{estado}</h1>
        </>
    )
}
export default NavBar