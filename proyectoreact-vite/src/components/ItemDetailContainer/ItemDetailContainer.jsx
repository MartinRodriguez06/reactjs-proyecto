import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"

export const ItemDetailContainer = () => {
  
  const {idProducto}= useParams()
  console.log(idProducto)
  gFetch(idProducto)
  
  return (
    <div>ItemDetailContainer id: {idProducto}</div>
  )
}
