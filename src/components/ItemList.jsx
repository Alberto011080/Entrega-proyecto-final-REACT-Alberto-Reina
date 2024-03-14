import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
    return (
        <>
            {products.map(prod => <Item product={prod} />)}
        </>

    )
}

export default ItemList;
