import React, { useReducer, useRef } from 'react'


export default function Reducer() {
    
    const [tasks,dispatch]= useReducer((state=[],initialState)=>{
        switch(initialState.type){
            case 'agregar_tarea':{
                return[...state,
                    {
                    id:state.lenght, title:initialState.title 
                }]
            }
            case 'borrar_tarea':{
                return state.filter((task,index)=> index != initialState.id)
            }
            default:{
                return state;
            }
        }
    })

const inputRef= useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch({
            type: 'agregar_tarea',
            title: inputRef.current.value
        });
    }
  return (
    <>
    <h1>Tareas</h1>
    <form onSubmit={handleSubmit}>
       <label>Tarea</label>
       <input type="text"  name='titulo' ref={inputRef}/> 
       <button>Enviar</button>
    </form>

    <div>
        {tasks && tasks.map((element,index)=>{
            return(
                <div key={index}>
                    <h1>{element.title}</h1>
                    <button onClick={()=>dispatch({type:'borrar_tarea', id: index})}>Borrar</button>
                </div>
                                
            )
        })}
    </div>
    </>
  )
}
