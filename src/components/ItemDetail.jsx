import React from "react";
import { useCounter } from "./hooks/useCounter";
import { Link } from "react-router-dom";
import { useCarritoContext } from './context/CartContext';

function ItemDetail({ item }) {
  const {addItem}  = useCarritoContext()
  const { count, increment, decrement, reset } = useCounter(1, item.stock, 1);

  const handleAddToCart = () => {
    addItem(item, count)
    // console.log(`estoy comprando ${count} de ${item.name}`)
    // console.log("Producto agregado al carrito")
}

  return (
    <div className="bg-white p-8 rounded-lg mas-w-md shadow-2xl">       
      <Link to={'/'}>
            <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">CERRAR</button>
      </Link>
      <img
        className="w-full h-64 objetc-cover mb-6"
        src={`${item.img}`}
        alt={`Imagen de ${item.name}`}
      />

      <div className="text-center">
        <h2 className="text-2x1 font-bold mb-2">{item.name}</h2>
        <p className="text-gray-700 mb-2 font-semibold">{item.artista}</p>
        <p className="text-gray-700 mb-2 font-semibold">Precio: {item.price}€</p>
        <p className="text-gray-700 mb-2 font-semibold">Stock: {item.stock}</p>
        <div className="container mx-auto mt-8">
          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={decrement}
            >
              -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={increment}
            >
              +
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={reset}
            >
              Reset
            </button>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
