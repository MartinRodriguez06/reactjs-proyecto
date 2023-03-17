import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartContainer from './components/CartContainer/CartContainer'
import { CartContextProvider } from './context/CartContext'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {


  return (

    <div className="border border-5">
    <BrowserRouter>
    <CartContextProvider>
    
    <NavBar />
    <Routes> 
      <Route path='/' element={ <ItemListContainer saludo='hola soy ItemListContainer'/>} />
      <Route path='/categoria/:idCategoria' element={ <ItemListContainer saludo='hola soy ItemListContainer'/>} />
      {/*<Route path='/categoria/historia' element={ <ItemListContainer saludo='hola soy ItemListContainer'/>} />*/}
      <Route path='/detalle/:idProducto' element={<ItemDetailContainer/> }/>
      <Route path='/cart' element = { <CartContainer />} />

      <Route path='*' element={<Navigate to='/'/>} />
      
      
       

    </Routes>
     {/*<ItemCount inital={1} stock={10} onAdd={()=>{}} />*/}
  
    </CartContextProvider>
    </BrowserRouter>

     
   
    </div>
    
   
  )
}

export default App
