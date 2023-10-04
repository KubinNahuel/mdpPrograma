import React from 'react'
import CustomEmail from '../customEmail';
import { CiAirportSign1, CiAlignCenterV } from "react-icons/ci";
import { FiAlertOctagon } from "react-icons/fi";
export default function Formulario() {
    const handleSubmit=(e)=>{
        e.preventDefault();
let asunto= e.target.asunto.value;
let correo = e.target.correo.value;
let texto = e.target.texto.value;
CustomEmail(correo,asunto,texto)


    }
  return (
   <>
   <div >
  <h1>Form</h1>
  <form onSubmit={handleSubmit}>
    <label >asunto</label>
    <input type="text" name='asunto'/>
    <label >email</label>
    <input type="text" name='correo'/>
    <label >texto</label>
    <input type="text" name='texto'/>
    <button type='submit' >Enviar</button>
  </form>
<div>
  <CiAirportSign1/>
  <CiAlignCenterV/>
  <FiAlertOctagon/>
</div>

</div>
   </>
  )
}
