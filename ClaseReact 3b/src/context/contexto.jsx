import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
export const MyContext= React.createContext();


export function DataProvider({children}){
const [token, setToken] = useState(()=>localStorage.getItem('authTokens'? JSON.parse(localStorage.getItem('authTokens')): null))
const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

const history= useNavigate()

const logIn=(inputs)=>{
    fetch('http://localhost:3030/user/login',{
        method:'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(inputs)
    }).then((res)=>{
       return res.json()
    }).then((data)=>{
        setToken(data.token)
        setUser(jwt_decode(data.token))
        localStorage.setItem('authTokens', JSON.stringify(data.token))
        history('/')
       
    }).catch((e)=>{
        console.log(e)
    })
}

const logOut=()=>{
    setToken(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    history('/login')
}

const register=(inputs)=>{
    fetch('http://localhost:3030/user/createUser',{
        method:'POST',
        body: JSON.stringify(inputs)
    }).then((res)=>{
        res.json()
    }).then((data)=>{
        history('/login')
    }).catch((e)=>{
        console.log(e)
    })
}

    return(
<MyContext.Provider value={{user,logIn,logOut,register}}>
    {children}
</MyContext.Provider>
    )
}
