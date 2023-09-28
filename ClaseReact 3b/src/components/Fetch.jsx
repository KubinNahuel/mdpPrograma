import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Fetch() {

const url='http://localhost:3030/user'

const [inputs,setInputs]= useState({
  name:'',
  password:'',
  email:''
})
const [users, setUsers]= useState([{}])

useEffect(()=>{
  fetch('http://localhost:3030/user').then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data.data)
    setUsers(data.data)
  })
},[])

const llamada = async()=>{
  fetch(url).then((response)=>{
    return response.json() 
    }).then((data)=>{
      console.log(data)
    }).catch((e)=>{
      console.log(e)
    })
}

const handleChange =(e)=>{
    const name= e.target.name
    const value= e.target.value
    setInputs(values=>({...values, [name]:value}))
   
}

const handleSubmit=(event)=>{
 
  event.preventDefault()
  fetch('http://localhost:3030/user/createUser',{
    method: 'POST',
    headers:{
      'Content-type': 'application/json; charset=UTF-8',
    },
    body:JSON.stringify(inputs)
  }).then((res)=>{
     res.json()
  }).then(data=>console.log(data))
  .catch((e)=>{
    console.log(e)
  })
}

  return (
    <div>
     
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label >Nombre</label>
      <input type="text" onChange={(e)=>{handleChange(e)}} name='name' />

      <input type="email" onChange={(e)=>{handleChange(e)}} name='email'/>
      
      <input type="password" onChange={(e)=>{handleChange(e)}} name='password'/>
      <button type='submit'>Enviar</button>
    </form>

    {users && users.map((elem, index)=>{
      return(
        <div className='userCard' key={index}>
          <img src={elem.Image} />
          <h1>{elem.name}</h1>
          <h1>{elem.email}</h1>
        </div>
      )
    })}
    </div>
  )
}
