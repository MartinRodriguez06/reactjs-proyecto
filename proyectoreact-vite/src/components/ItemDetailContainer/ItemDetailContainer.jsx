import{ doc, getDoc, getFirestore } from 'firebase/firestore'
import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"



 const ItemDetailContainer = () => {
  const[product, setProduct] = useState({})
  const[loading, setLoading] = useState(true)
  const {idProducto}= useParams()

  
  //console.log(idProducto)

  useEffect(()=>{ 
    const db = getFirestore()
    const queryDoc = doc(db, 'Productos', idProducto)
    getDoc(queryDoc)
    .then(respProd => setProduct({ id: respProd.id, ...respProd.data() } ))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }, [])
  

  return (
    <>
     { loading ?
     <h2>Loading...</h2>
     :
   <ItemDetail product={product}/>}
   </>
  )
}


export default ItemDetailContainer