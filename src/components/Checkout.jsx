import React from 'react';
import { useRef } from 'react';
import { useCarritoContext } from './context/CartContext';
import {Link, useNavigate} from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from '../Firebase/firebase';
import { toast } from "react-toastify"

function Checkout(props) {
    const formRef = useRef()
    const navigate = useNavigate()// esto devuelve la localizacion de mi componente (ruta)
    const {carrito, totalPrice, emptyCart} = useCarritoContext()



    const handleSubmit = (e) =>{
        e.preventDefault()     
        const datForm = new FormData(formRef.current) //paso de un formulario HTML a un objeto iterador de java 
        const cliente = Object.fromEntries(datForm) //paso un objeto iterator a un objeto simple
        
        //Primero se genera la orden de compra


        //Segundo Modificar el stock
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => { //then recoge getproduct y lo almacena en prodBDD que es el nombre que le damos nosotros
                if(prodBDD.stock >= prodCarrito.quantity){ //Si existe stock suficiente para realizar la compra
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD) //es una actualizacion, coge una referencia id que se ha comprado y le actualiza el stock
            }else{
                toast.info(`📣 El producto con el nombre ${producto.name} no puede continuar con la compra ya que no posee stock suficiente`,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
            })
        
                aux.filter(prod => prod.id != prodBDD.id)
            }
            
            })
        })

        aux.map(prod => ({id: prod.id, quantity: prod.quantity, price: prod.price}))


        //Crear orden de Compra

        createOrdenCompra(cliente, totalPrice(), aux, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas Gracias! Disfruta de tu compra. Tu ID de compra es : ${ordenCompra.id} por un total de ${totalPrice()}€. En breve contactaremos para realizar el envio`,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
                emptyCart()
                e.target.reset() //es el disparador del evento. Resetea el evento una vez cargado 
                navigate('/')
            })
            .catch(e => {
                toast.error(`🚧 Error al generar orden de compra ${e}`,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"

            })
            })
     
    }
    return (

        <>
        {
            carrito.length === 0 ?
                <>
                    <h2>Para finalizar compra debe tener productos en el carrito</h2>
                    <Link to={"/"}>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                            Volver al inicio
                        </button>
                    </Link>

                </>
                :
                 <div className='max-w-md mx-auto p-6 mt-4 mb-6 bg-gray-200 rounded-md shadow-md'>
                     <form action="" ref={formRef} onSubmit={handleSubmit}>
                        <label className='block mb-2 text-gray-700'>Nombre:</label>
                        <input type="text" className='w-full p-2 mb-4 border rounded-md' name="nombre"/>
                        <label className='block mb-2 text-gray-700'>Apellido:</label>
                        <input type="text" className='w-full p-2 mb-4 border rounded-md' name='apellido' />
                        <label className='block mb-2 text-gray-700'>Direccion:</label>
                        <input type="text" className='w-full p-2 mb-4 border rounded-md' name='direccion'/>
                        <label className='block mb-2 text-gray-700'>DNI:</label>
                        <input type="number" className='w-full p-2 mb-4 border rounded-md' name='dni'/>
                        <label className='block mb-2 text-gray-700'>Email:</label>
                        <input type="email" className='w-full p-2 mb-4 border rounded-md' name='email'/>
                        <label className='block mb-2 text-gray-700'>Telefono: </label>
                        <input type="number" className='w-full p-2 mb-4 border rounded-md' name='telefono'/>
                        <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded-md'>Finalizar Compra</button>
                    </form>        
                    </div>
            }
        </>

    )
}

export default Checkout