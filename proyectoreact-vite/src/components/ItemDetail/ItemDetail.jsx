import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({product}) => {

  const[isCount, setIsCount] = useState(true)

   const{ agregarAlCarrito }=useCartContext()

    function onAdd(cantidad){
        console.log(cantidad)
        agregarAlCarrito({ ...product, cantidad})
        setIsCount(false)
      }
      
  return (
    <div>
    <div className="row">
      <div className="col-6">
        <div>
          <img src={product.foto} alt='imagen' className="w-50"/>
        </div>
        <div>
          <p className="">Nombre: {product.name}</p>
          <p className="">Categoria: {product.categoria} </p>
          <p className="">Precio: {product.price}</p>
          
        </div>
      </div>
      <div className="col-6">
        {isCount ? 
             <ItemCount initial={1} stock={10} onAdd={onAdd}/>
          : 
          <>
          <Link to='/cart' className="btn btn-primary">Ir a cart</Link>
          <Link to='/' className="btn btn-primary">Seguir comprando</Link>
          </>
        }
      

      </div>
    </div>
    
    
  </div>
  )
}

export default ItemDetail