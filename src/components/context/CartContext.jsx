import { useState, createContext, useContext } from "react";


const CarritoContext = createContext() //Creando el contexto (de momento vacio)

export const useCarritoContext = () => useContext(CarritoContext) //Funcion para consultar mi contexto en otros componentes

//^proveedor.... abajo. Para poder dar uso al contexto necesito ofrecerlo a los componentes. en caso del carrito todos los componenetes de mi aplicación

export const CarritoProvider = (props) => { //Forma de recibir propiedades si fuera necesario "props"
    //Agregar producto - Eliminar producto - Vaciar carrito - Obtener cantidad (subtotales) y obtener precio total (suma de subtotales) - Buscar Producto
    const [carrito, setCarrito] = useState([])


            //Buscar Carrito
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id) //V o F. Esto es para ver si exisite o no existe el producto en el carrito
    }

            //Agregar producto
    const addItem = (item, cantidad) => {
        if(isInCart (item.id)){
            const indice = carrito.findIndex (prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = quantity
            setCarrito (aux)

        }else{
            const newItem = {
                ...item,
                quantity: cantidad
            }
             /*const aux = [...carrito]
            aux.push(newItem)
            setCarrito(aux)*/

            setCarrito([...carrito, newItem]) //Copio todo el array previo que existia en carrito y te agrego un nuevo item.

        }
    }


//Remove Item del carrito
    const removeItem = (id) => {
    /*const aux = [...carrito]
    const indice = aux.findIndex(prod => prod.id === id)
    if(indice != -1){
        setCarrito(aux.splice(indice, 1))
    }

    Otra forma de buscar el item es con un finder */
     setCarrito(carrito.filter(prod => prod.id !== id))
    }

//Vaciar carrito. Dejamos el array de setCarrito vacio. Todo borrado.
    const emptyCart = () => {
    setCarrito([])
    }

//Conocer la cantidad total de productos
    const getItemquantity = () =>{
    return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

//Me da el total del carrito. Multiplica cada precio del producto por cantidad y lo suma.
    const totalPrice = () => {
    return carrito.reduce((acum, prod) => acum += (prod.quantity * price, 0))
    }

    console.log(carrito)
//Esto ya es la devolución para que se obtenga. Provider es la persona que provee de información al carrito. El proveedor va a ofrecer la forma que va a utilizar el carrito. 
    return (
    <CarritoContext.Provider value = {{carrito, addItem, removeItem, emptyCart, getItemquantity, totalPrice}}>
        {props.children}
    </CarritoContext.Provider>
    )


}
//YA solo falta llevarlo a APP porque lo va a utilizar toda la aplicación. va antes del navbar... es para toda la aplicación

