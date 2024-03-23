import React from 'react';
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList"
import { getProducts } from '../Firebase/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {cid} = useParams ()


   
    useEffect(() => {
        getProducts()
        //fetch('../data/productos.json')
          //  .then(response => response.json())
            .then(prods => {
                const productos = prods.filter(prod => prod.stock>0)
                if(cid){
                    const productosFiltrados = productos.filter(prod => prod.category == cid )
                    setProducts(productosFiltrados)
                }else{
                    // const productosFiltrados = prods.filter(prod => prod.stock>0)
                    setProducts(productos)
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
