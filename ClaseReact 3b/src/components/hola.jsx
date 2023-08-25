import { memo, useCallback, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { MyContext } from "../context/contexto";

function Hola({numero,sumar}){
    const {id,name}= useParams();
    console.log(name)
    const {estadoContext} = useContext(MyContext)
    console.log(estadoContext)
    return(
        <>
        <h1>{numero}</h1>
        <button onClick={sumar}>sumar</button>

        <button><Link to='/'>Volver</Link>   </button>
        </>
    )
}

export default memo(Hola)