import React from "react";
import { useCarrito } from "../context/CarritoContext";

function Carrito() {
  const { carrito, eliminarDelCarrito } = useCarrito();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🛒 Tu Carrito</h1>
      {carrito.length === 0 ? (
        <p>No hay juegos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((juego) => (
            <li key={juego.id} className="flex justify-between items-center">
              <span>{juego.nombre}</span>
              <button
                onClick={() => eliminarDelCarrito(juego.id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 👇 IMPORTANTE
export default Carrito;
