import React from 'react';
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {cid} = useParams ()
    console.log(cid)
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                if(cid){
                    const productos = prods.filter(prod => prod.category == cid)
                    setProducts(productos)
                }else{
                    setProducts(prods)
                }
                
            })
            .catch((error) => console.log(error))
    }, [cid])
    return (
        <div className='flex flex-wrap gap-2'>
            <ItemList  products={products} />
        </div>
    )
}

export default ItemListContainer;
