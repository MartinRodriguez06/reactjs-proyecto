import { addDoc, collection, getFirestore,} from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import Form from "../Form/Form"



const NoProduct = () => {
  return <div className="container">
    <h2>Carrito vacio</h2>
    <Link to='/' className="btn btn-outline-primary"> Ir a Inicio</Link>
  </div>
}

const CartContainer = () => {

  const[id,setId] = useState('')

  const[dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  
  })

    const{ cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

   const generarOrden = (event)=>{
    event.preventDefault()
    
      const order={}
      order.buyer = dataForm
      order.precioTotal= precioTotal()
      order.productos = cartList.map(({id, name, price})=>({id, name, price}))
     
          const db = getFirestore()
          const queryCollection = collection(db, 'Orders')

          addDoc(queryCollection, order)
          .then(resp => setId(resp.id))
          .catch(err=> console.log(err))
          .finally(()=>{
            vaciarCarrito()
            setDataForm({
              name: '',
              phone: '',
              email: ''
            })


          })

   }

      
    const handleOnChange = (evet)=>{

      setDataForm({
        ...dataForm,
        [evet.target.name]: evet.target.value
      })
    }

    


  return (
    <div>

      { id !== '' && <h2> El numero de la orden de compra es: {id}</h2>}

      {
        cartList.length === 0 ? 
        <NoProduct />
        :
        <>
         <CartList cartList={cartList} eliminarProducto={eliminarProducto} />
        <p> {precioTotal()==0 && `Precio total: ${precioTotal()}`} </p>
        <button onClick={vaciarCarrito} className='btn btn-primary'> Vaciar carrito </button>
        <Form
            generarOrden={generarOrden}
            handleOnChange={handleOnChange}
            dataForm={dataForm}
          />
        </>
        
     }
         
    </div>
  )
}

export default CartContainer