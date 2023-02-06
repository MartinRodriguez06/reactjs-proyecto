import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <ItemListContainer saludo='hola soy ItemListContainer'/>
    </>
    
   
  )
}

export default App
