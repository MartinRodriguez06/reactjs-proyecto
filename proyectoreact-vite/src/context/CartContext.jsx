import { createContext, useContext, useState } from "react";


         const CartContext = createContext([])
  const useCartContext = ()=> {
    return useContext(CartContext)
    }
    

    export const CartContextProvider = ({children})=>{
    //estados y funciones globales
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (producto)=>{
        setCartList( [
            ...cartList,
            producto
        ] )
    }

    const vaciarCarrito = ()=>{
         setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito    
        }}>
           {children}
        </CartContext.Provider>
    )
}

export { useCartContext };
