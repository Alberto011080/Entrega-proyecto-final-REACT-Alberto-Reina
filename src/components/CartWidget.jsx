import React from 'react';
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import  {faShoppingCart}  from "@fortawesome/free-solid-svg-icons"
import { useCarritoContext } from './context/CartContext';


  const CartWidget = () => {
    const { getItemquantity } = useCarritoContext()
    return (
       
            <button className="bg-gray text-white px-4 py-auto flex items-center hover:bg-gray-900 rounded-full ">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>{getItemquantity()}</span>
            </button>       
      
    )
}

export default CartWidget;
