import { createContext, useContext, useState } from "react";


const CartContext = createContext([])
const useCartContext = () => {
    return useContext(CartContext)
}


export const CartContextProvider = ({ children }) => {
   
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (producto) => {
        const idxProd = cartList.findIndex(product => product.id === producto.id)
        if (idxProd !== -1) {
            cartList[idxProd].cantidad += producto.cantidad
            setCartList([...cartList])
            return
        }


        setCartList([
            ...cartList,
            producto
        ])
    }

    const precioTotal = () => cartList.reduce((count, producto) => count += (producto.cantidad * producto.price), 0)

    const cantidadTotal = () => cartList.reduce((count, producto) => count += producto.cantidad, 0)

    const eliminarProducto = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    const vaciarCarrito = () => {
        setCartList([])
    }


    <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarProducto

    }}>
        {children}
    </CartContext.Provider>

}

export { useCartContext };
