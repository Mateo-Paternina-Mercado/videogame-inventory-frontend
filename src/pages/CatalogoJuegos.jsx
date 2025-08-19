import React, { useState } from "react";
import juegosData from "../data/juegosData";
import { useCarrito } from "../context/CarritoContext"; // 👈 importa el contexto
import { toast } from "sonner"; // 👈 para el estilo gamer

const CatalogoJuegos = () => {
  const [juegos, setJuegos] = useState(juegosData);
  const { agregarAlCarrito } = useCarrito(); // 👈 función del context

  const comprarJuego = (id) => {
    setJuegos((prev) =>
      prev.map((juego) =>
        juego.id === id
          ? juego.stock > 0
            ? { ...juego, stock: juego.stock - 1 }
            : juego
          : juego
      )
    );

    const juego = juegos.find((j) => j.id === id);
    if (juego.stock > 0) {
      agregarAlCarrito(juego); // 👈 añade al carrito
      toast.success(`🎮 ${juego.titulo} agregado al carrito`);
    } else {
      toast.error(`❌ ${juego.titulo} no tiene stock disponible`);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {juegos.map((juego) => (
        <div key={juego.id} className="bg-gray-900 rounded-xl p-4 shadow-lg hover:scale-105 transition">
          <img src={juego.imagen} alt={juego.titulo} className="rounded-lg w-full h-60 object-cover" />
          <h3 className="text-green-400 text-xl font-bold mt-3">{juego.titulo}</h3>
          <p className="text-gray-400">{juego.descripcion}</p>
          <p className="text-white font-semibold mt-2">${juego.precio}</p>
          <p className={`mt-1 ${juego.stock > 0 ? "text-green-500" : "text-red-500"}`}>
            Stock: {juego.stock}
          </p>
          <button
            onClick={() => comprarJuego(juego.id)}
            className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full"
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

export default CatalogoJuegos;
