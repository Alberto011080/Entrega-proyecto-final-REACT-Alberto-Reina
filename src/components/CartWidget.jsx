import React from 'react';
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import  {faShoppingCart}  from "@fortawesome/free-solid-svg-icons"


const CartWidget = () => {
    return (
      
            <button className="bg-teal-500 text-white px-4 py-2 rounded-xl flex items-center">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>0</span>
            </button>       
    )
}

export default CartWidget;
