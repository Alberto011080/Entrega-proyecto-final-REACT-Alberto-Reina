import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className=" max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md">
        <img src={`../img/${product.img}`} alt={`Imagen de ${product.name}`} />
        <h2 className="text-lg font-semibold  mb-2">{product.name} {product.description}</h2>
        <p className="text-gray-700 mb-2 font-semibold">Artista: {product.artista}</p>
        <p className="text-xl ">{product.price} €</p>
        {/* <p className="text-gray-700 mb-2">Stock: {product.stock}</p> */}
        <div className="flex justify-between items-center">
            <Link to={`/product/${product.id}`}>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                  Ver Producto
                </button>
            </Link>
        </div>
    </div>
  );
};

export default Item;
