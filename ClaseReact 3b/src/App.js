import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {PrimerComponente as Landing} from './components/landing';
import { Route, Routes } from 'react-router-dom';
import  Hola  from './components/hola';
import Consolear from './components/Consolear';
import { DataProvider } from './context/contexto';
import Reducer from './components/Reducer';


function App() {

const [estado,setEstado]=useState(0);
const cambiarEstado=()=>{
  setEstado(estado+1)
}

  return (
    <DataProvider>
   <Consolear/>
   
    <Routes>
      <Route path='/' element={<Consolear/>}></Route>
      <Route path='/index/:id/:name' element={<Hola numero={estado} sumar={cambiarEstado}/>}></Route>
      <Route path='/reducer' element={<Reducer/>}></Route>
    </Routes>
    </DataProvider>
    
       
    
  );
}

export default App;
