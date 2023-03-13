import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';





function App() {

  return (

    <div className="border border-5 border-primary w-100">
    <BrowserRouter>
    <NavBar />
    <Routes> 
      <Route path='/' element={ <ItemListContainer saludo='hola soy ItemListContainer'/>} />
      <Route path='/categoria/:idCategoria' element={ <ItemListContainer saludo='hola soy ItemListContainer'/>} />
      {/*<Route path='/categoria/historia' element={ <ItemListContainer saludo='hola soy ItemListContainer'/>} />*/}
      <Route path='/detalle/:idProducto' element={<ItemDetailContainer/> }/>

      <Route path='*' element={<Navigate to='/'/>} />
      
      
       

    </Routes>
    <ItemCount inital={1} stock={10} onAdd={()=>{}} />
    </BrowserRouter>
    </div>
    
   
  )
}

export default App
