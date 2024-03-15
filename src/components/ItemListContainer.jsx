import React from 'react';
import {useState, useEffect} from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                setProducts(prods)
            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;
