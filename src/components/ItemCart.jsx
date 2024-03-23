import React from 'react';
import { useCarritoContext } from './context/CartContext';
import { useCounter } from "./hooks/useCounter";

function ItemCart({product}) {
    const {removeItem, addItem } = useCarritoContext()
    const { count, increment, decrement} = useCounter(product.quantity, product.stock, 1);
    return (
        <div className='flex items-center p-4 border-gray-300'>
            <div className='mr-4'>
                <img src={`${product.img}`} alt={`Imagen de ${product.name}`} className="w-24 h-24 object-cover" />
            </div>
            <div className='flex-1'>
                <h3 className='text-lg font-semibold'>{product.name} {product.artista} </h3>
                
            </div>
            <div className='flex items-center'>              
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={ () => {
                        decrement()
                        addItem(product, count)
                    
                    }}>         
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => {
                        increment()
                        addItem(product, count)
                    
                    }}>             
                    +
                </button>
            </div>
            <div className='ml-4'>
                <p className='text-lg font-semibold'>Subtotal: {product.price *  count} €</p>
            </div>
            <div className="ml-4">
                <button className="bg-red-500  text-white px4 py-2 rounded" onClick={() => removeItem(product.id)}>
                    Eliminar
                </button>
            </div>
            
        </div>
    );
}

export default ItemCart;