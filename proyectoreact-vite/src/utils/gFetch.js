

let productos = [
    {id: '1' , categoria: 'fantasia' , name: "producto 1" , price: 200, foto: '../img/libro.PNG'},
    {id: '2' , categoria: 'fantasia' , name: "producto 2" , price: 200, foto: '../img/libro.PNG'},
    {id: '3' , categoria: 'fantasia' , name: "producto 3" , price: 200, foto: '../img/libro.PNG'},
    {id: '4' , categoria: 'historia' , name: "producto 4" , price: 200, foto: '../img/libro.PNG'},
    {id: '5' , categoria: 'historia' , name: "producto 5" , price: 200, foto: '../img/libro.PNG'},
    {id: '6' , categoria: 'historia' , name: "producto 6" , price: 200, foto: '../img/libro.PNG'}
]


export const gFetch = (id) => new Promise( (res, rej)=>{
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(id ? productos.find(prod =>id === prod.id): productos)    
        }, 1000)
    } else {
        rej('Todo mal ')
        
    }
})
