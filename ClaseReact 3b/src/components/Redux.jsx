import React from 'react'
import {createStore} from 'redux'

export default function Redux() {
    const initialState= 0
function reducer(state=0,action){
    switch(action.type){
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}
let store= createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})

return (
    <>
    <h1>{store.getState()}</h1>
    <button onClick={()=>{store.dispatch({type:'INCREMENT'})}}>+</button>
    <button onClick={()=>{store.dispatch({type:'DECREMENT'})}}>-</button>
    </>
  )
}
