import Titulo from "../Titulo/Titulo"

 const ItemListContainer = (props) => {
    const {saludo} = props
    let titulo = 'Soy titulo de app'
    console.log(props)
  return (
    <>
   <Titulo titulo={titulo} subtitulo='Soy sub de app' />
   <p>{saludo}</p>
    </>
  )
}

export default ItemListContainer