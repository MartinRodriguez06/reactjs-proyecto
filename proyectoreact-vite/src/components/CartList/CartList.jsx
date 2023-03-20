import React from 'react';
import { useCartContext } from '../../context/CartContext';

const CartList = () => {
  const { cartList, eliminarProducto } = useCartContext();

  return (
    <div className="container">
      {cartList.map((prodCart) => (
        <p key={prodCart.id}>
          <img src={prodCart.foto} className="w-25" />
          Nombre: {prodCart.name} - 
          Cantidad: {prodCart.cantidad} - 
          Precio:{' '} {prodCart.price}{' '}
          <button
            onClick={() => eliminarProducto(prodCart.id)}
            className="btn btn-danger"
          >
            x
          </button>
        </p>
      ))}
    </div>
  );
};

export default CartList;