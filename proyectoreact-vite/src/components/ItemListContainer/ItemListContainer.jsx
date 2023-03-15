import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import ItemList from "../itemList/itemList"
import Titulo from "../Titulo/Titulo"


const Loading = ()=>{
  
   useEffect(()=>{
    return ()=> console.log('desmontado loading...')
   })

  return(
    <h2>Cargando....</h2>
  )
}

 const ItemListContainer = ({saludo}) => {
  
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategoria} = useParams()

  useEffect(()=>{
    if (idCategoria){
      gFetch()
      .then(resp => setProductos(resp.filter(producto=>producto.categoria === idCategoria)))
      .catch( err => console.log(err))
      .finally( ()=> setLoading(false))
    } else{
      gFetch()
      .then(resp => setProductos(resp))
      .catch( err => console.log(err))
      .finally( ()=> setLoading(false))
    }
    
  }, [idCategoria])
console.log(idCategoria)


  return (
    <>
   <h2>{saludo}</h2>

   { loading ? 
      
      <Loading/>
   :
   <>
   <ItemList productos={productos}/>
   </>
   }
    </>
  )
}

export default ItemListContainer