import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import { getProduct } from '../Firebase/firebase.js';
import ItemDetail from './ItemDetail';


function ItemDetailsContainer() {

    const [item, setItem] = useState ([])
    const {pid} = useParams()

    useEffect(() => {
        getProduct(pid)
        .then(prod => setItem(prod))
        .catch(error => console.log(error))

    },[])
    return (
        <div className='fixed w-full h-full flex justify-center items-center bg-black bg-opacity-30'>
           <ItemDetail item ={ item }/>
        </div>
    )
}

export default ItemDetailsContainer; 