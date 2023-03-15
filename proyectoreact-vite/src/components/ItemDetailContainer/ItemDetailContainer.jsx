import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"



 const ItemDetailContainer = () => {
  const[product, setProduct] = useState({})
  const {idProducto}= useParams()

  
  //console.log(idProducto)

  useEffect(()=>{ 
    gFetch(idProducto)
    .then(resp=>setProduct(resp)) 
    .catch(err => setProduct(err))
  }, [])
  

  return (
   <ItemDetail product={product}/>
  )
}


export default ItemDetailContainer