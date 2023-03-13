import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import AgregarAlCart from "../AgregarAlCart/Agregar"
import { Input } from "../Input/Input"

export const ItemDetailContainer = () => {
  
  const {idProducto}= useParams()
  console.log(idProducto)
  gFetch(idProducto)
  
  return (
    <div>
      ItemDetailContainer id: {idProducto}
      {/*<Input/>*/}
      
    </div>
  )
}
