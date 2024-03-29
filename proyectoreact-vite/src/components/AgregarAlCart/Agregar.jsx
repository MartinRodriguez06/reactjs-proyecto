import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <>
            <Link to='/cart' >
                <button 
                    className="btn btn-outline-primary" 
                    onClick={()=>console.log('ir a cart') } 
                >Ir al Cart o Terminar compra</button>
            </Link>
            <Link to='/' >
                <button 
                    className="btn btn-outline-primary" 
                    onClick={()=>console.log('ir al home') } 
                >Seguir comprando</button>
            </Link>
        </>
    )
}



const ButtonCount= ({handleInter})=> {
    return <button 
                className="btn btn-outline-success" 
                onClick={handleInter}
            >
                Agregar Al carrito
            </button>

}


const AgregarAlCart = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             
        </div>
    )
}

export default AgregarAlCart
