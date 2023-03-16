import item from "../item/item"


const ItemList = ({productos}) => {
  return (
    <div className="d-flex justify-content-center align-item-center">
        {
        productos.map( producto => <item producto={producto}/>)
        }
      </div>
  )
}

export default ItemList