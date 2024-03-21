import React from 'react';
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {cid} = useParams ()


   
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                if(cid){
                    const productosFiltrados = prods.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                }else{
                    setProducts(prods)
                }
                
            })
            
    }, [cid])
    
    return (
        <div className='flex flex-wrap gap-2'>
            <ItemList  products={products} plantilla="Item"/>
        </div>
    )
}

export default ItemListContainer;
