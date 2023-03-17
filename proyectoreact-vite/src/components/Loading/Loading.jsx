import { useEffect } from "react"

export const Loading = ()=>{
  
    useEffect(()=>{
     return ()=> console.log('desmontado loading...')
    })
 
   return(
     <h2>Cargando....</h2>
   )
 }