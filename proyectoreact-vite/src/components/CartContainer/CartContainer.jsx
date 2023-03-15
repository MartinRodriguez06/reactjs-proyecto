import { useCartContext } from "../../Context/CartContext"


const CartContainer = () => {
    const{ cartList, vaciarCarrito } = useCartContext()
  return (
    <div>
      {
        cartList.map(prodCart => (
            <p>
              <img src={prodCart.foto} className='w-25'/>
            
                Nombre: {prodCart.name} -
                Cantidad {prodCart.cantidad} -
                Precio {prodCart.price} -
            </p>
        ))
      }
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer