import { useEffect, useState } from "react"
import{ collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
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
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const {idCategoria} = useParams()


  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'Productos')

    if (idCategoria){

      //filtro
      const queryFilter = query(queryCollection, where( 'categoria','==', idCategoria ))

      getDocs(queryFilter)
      .then(respCollection => setProductos(respCollection.docs.map(prod =>({id:prod.id, ... prod.data()}))  ))
      .catch(err=>console.error(err))
      .finally(()=>setLoading(false))
      
    } else{
      getDocs(queryCollection)
       .then(respCollection => setProductos(respCollection.docs.map(prod =>({id:prod.id, ... prod.data()}))  ))
      .catch(err=>console.error(err))
      .finally(()=>setLoading(false))
    
    }
    
  }, [idCategoria])


  const handleAddProduct = ()=>{
    setProductos([
      ...productos,
      { id: productos.length+1, name: 'nuevo producto', price: 200, categoria: 'fantasia'}
    ])
  }
  console.log(productos)


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