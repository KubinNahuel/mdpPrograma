import React, { createContext, useState } from "react";

export const MyContext= React.createContext();


export function DataProvider({children}){
const [estadoContext,setEstadoContext]= useState(100)

    return(
<MyContext.Provider value={{estadoContext}}>
    {children}
</MyContext.Provider>
    )
}
