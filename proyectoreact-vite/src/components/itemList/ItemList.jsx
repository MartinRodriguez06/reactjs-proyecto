import item from "../item/item"


const ItemList = ({productos}) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {productos.map( producto => <item producto={producto}/>)
        }
      </div>
  )
}

export default ItemList