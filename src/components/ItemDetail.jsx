import React from "react";

function ItemDetail(item) {
  return (
    <div className="bg-white p-8 rounded-lg mas-w-md">
      <img  className="w-full h-64 objetc-cover mb-6"
        src={`..img/${item.img}`}
        alt={`Imagen de ${item.name}`}/>
      
      <div className="class-center">
        <h2 className="text-2x1 font-bold mb-2">{item.name}</h2>
        <p className="text-gray-700 mb-4">{item.artista}</p>
        <p className="text-gray-700 mb-4">Precio: {item.price}€</p>
        <p className="text-gray-700 mb-4">Stock: {item.stock}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
