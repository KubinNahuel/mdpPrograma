import React, { useContext, useState } from 'react'
import { MyContext } from '../context/contexto'

export default function Login() {
const {logIn,user} = useContext(MyContext)
const [inputs, setInputs] = useState({
    email: '',
    password:''
})

const handleChange=(e)=>{
    const name= e.target.name
    const value= e.target.value
    setInputs(values=>({...values, [name]:value}))
    
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputs)
    logIn(inputs)
    }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label >Email</label>
            <input onChange={(e)=>handleChange(e)} type="email" name='email'/>
            <label >Password</label>
            <input onChange={(e)=>handleChange(e)}  name='password' type='password'/>
            <button >cambiar</button>
        </form>
    </div>
  )
}
