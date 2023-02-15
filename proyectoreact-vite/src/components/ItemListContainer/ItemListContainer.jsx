import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"
import Titulo from "../Titulo/Titulo"




 const ItemListContainer = ({saludo}) => {
  
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategoria} = useParams()

  useEffect(()=>{
    if (idCategoria){
      gFetch()
      .then(resp => setProductos(resp.filter(producto=>producto.categoria === idCategoria)))
      .catch( err => console.log(err))
      .finally( ()=> setLoading(false))
    } else{
      gFetch()
      .then(resp => setProductos(resp))
      .catch( err => console.log(err))
      .finally( ()=> setLoading(false))
    }
    
  }, [idCategoria])
console.log(idCategoria)


  return (
    <>
   <h2>{saludo}</h2>

   { loading ? 
      <h2>Cargando....</h2>
   :
   <div style={{
     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap'
   }}>
   {productos.map( producto => ( <div key={producto.id} className="card w-25 mt-3">
    <div className="card-header">Nombre: {producto.name} </div>
    <div className="card-body">  <img className="w-30" src={producto.foto}/>
                                  <br/>
                                 <label>Categoria: {producto.categoria}</label> 
                                 <br/>
                                 <label>Precio: {producto.price}</label> 
     </div>
    <div className="card-footer">
      <Link to={`/detalle/${producto.id}`}>
       <button className="btn btn-outline-dark w-100">Detalle</button>
       </Link>
        </div>
   </div> ))
   }
   </div>
   }
    </>
  )
}

export default ItemListContainer