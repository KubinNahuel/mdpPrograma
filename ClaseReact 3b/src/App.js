import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {PrimerComponente as Landing} from './components/landing';
import { Route, Routes } from 'react-router-dom';
import  Hola  from './components/hola';
import Consolear from './components/Consolear';
import { DataProvider } from './context/contexto';
import Reducer from './components/Reducer';
import Formulario from './components/Formulario';
import Redux from './components/Redux';
import Fetch from './components/Fetch';
import Login from './components/Login';


function App() {

const [estado,setEstado]=useState(0);
const cambiarEstado=()=>{
  setEstado(estado+1)
}

  return (
    <DataProvider>
    
    <Routes>
      <Route path='/' element={<Consolear/>}></Route>
      <Route path='/form' element={<Formulario/>}></Route>
      <Route path='/index/:id/:name' element={<Hola numero={estado} sumar={cambiarEstado}/>}></Route>
      <Route path='/reducer' element={<Reducer/>}></Route>
      <Route path='/redux' element={<Redux/>}></Route>
      <Route path='/fetch' element={<Fetch/>}></Route>
      <Route path='/login' element={<Login/>}></Route>

    </Routes>
    </DataProvider>
  );
}

export default App;
