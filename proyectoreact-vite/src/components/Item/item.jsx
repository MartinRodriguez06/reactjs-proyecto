import { Link } from "react-router-dom"


const Item = ({producto}) => {
  return (
    <div key={producto.id} className="card w-25 m-5 shadow d-flex justify-content-center align-items-center">
    <div className="card-header"> Nombre: {producto.name} </div>
    <div className="card-body">  <img className="w-28" src={producto.foto}/>
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
   </div>
  )
}

export default Item