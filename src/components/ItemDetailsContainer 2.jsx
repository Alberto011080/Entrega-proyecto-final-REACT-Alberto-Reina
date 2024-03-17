import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import ItemDetail from './ItemDetail';

function ItemDetailsContainer(props) {

    const [item, setItem] = useState ([])
    const {pid} = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
        .then(Response => Response.json())
        .then(productos => {
            
            const prod = productos.find(producto => producto.id == pid)
            if (prod)
                setItem(prod)
        })


    },[])
    return (
        <div className='fixed w-full h-full flex justify-center items-center bg-black bg-opacity-30'>
           <ItemDetail item ={item}/>
        </div>
    );
}

export default ItemDetailsContainer; 