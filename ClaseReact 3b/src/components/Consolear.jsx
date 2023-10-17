import React, { memo, useContext } from 'react'
import { MyContext } from '../context/contexto'

 function Consolear() {
  const {user,logOut}= useContext(MyContext)
    console.log(user)
  return (
    <div>
      {user ? <p>{user.user.name} {user.user.email}</p> : <></>}
      <button onClick={logOut}>Salir</button>
    </div>

  )
}

export default memo(Consolear)
