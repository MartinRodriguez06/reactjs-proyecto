import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"



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
    //generando una orden
      const order={}
      order.buyer = dataForm
      order.precioTotal= precioTotal()
      order.productos = cartList.map(({id, name, price})=>({id, name, price}))
      //console.log(order)

          //insertar una orden en firestore
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

         //actualizar un documento producto en firestore

        // const queryDoc = doc(db, 'Productos', 'dKgk3jD9UzzX6CWfRztm')
        // updateDoc(queryDoc, {
         // stock: 100,
         // isActive: true
        // })
         //.then(()=>console.log('producto actualizado'))

   }


    //handleOnChange me detecta los cambios en mi formulario
      
    const handleOnChange = (evet)=>{
     // console.log('nombre del input:', evet.target.name)
      //console.log('valor del input:',evet.target.value)
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
        {
          cartList.map(prodCart => (
              <div className="container">
              <p key={prodCart.id}>
                <img src={prodCart.foto} className='w-25'/>
              
                  Nombre: {prodCart.name} -
                  Cantidad: {prodCart.cantidad} -
                  Precio: {prodCart.price} {' '}
                  <button onClick={()=>eliminarProducto(prodCart.id)} className='btn btn-danger'> x </button>
              </p>
              </div>
          ))
        }
        <p> {precioTotal()==0 && `Precio total: ${precioTotal()}`} </p>
        <button onClick={vaciarCarrito} className='btn btn-primary'> Vaciar carrito </button>
         <div className="container d-flex justify-content-center align-items-center border border-2 border-primary w-50 mt-5">
         <form className="form-group w-100" onSubmit={generarOrden} >
          <h3>Datos del comprador</h3>
          <input className="form-control" 
          type='text' 
          name='name' 
          placeholder="ingresar nombre"   
          onChange={handleOnChange}      
           required 
           value={dataForm.name}
           />
          <input className="form-control" 
          type='text'
           name='phone' 
           placeholder="ingresar telefono"          
           onChange={handleOnChange} 
           required 
           value={dataForm.phone}
           />
          <input className="form-control"
           type='text'
            name='email' 
            placeholder="ingresar email"
            onChange={handleOnChange}          
             required
             value={dataForm.email}
              />
          <input className="form-control"
           type='text'
            name='validarEmail'
            placeholder="Validar el mail"
            onChange={handleOnChange}  
              required 
              value={dataForm.validarEmail}
              />
               <button className='btn btn-success'> Generar Orden </button><br/>
        </form> 
         </div>
  
      
      
        </>
        
     }
    
    
      
    </div>
  )
}

export default CartContainer