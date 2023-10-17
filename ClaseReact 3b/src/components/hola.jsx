import { memo, useCallback, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { MyContext } from "../context/contexto";

function Hola({numero,sumar}){

 
   
    
    return(
        <>
       

        <button><Link to='/'>Volver</Link>   </button>
        </>
    )
}

export default memo(Hola)