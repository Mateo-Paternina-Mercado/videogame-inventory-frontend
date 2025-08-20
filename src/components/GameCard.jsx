import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const GameCard = ({ juego, addFavorito }) => {
  const { addToCarrito } = useContext(CarritoContext);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col">
      <img src={juego.imagen} alt={juego.titulo} className="rounded-lg mb-3" />
      <h3 className="font-bold text-lg">{juego.titulo}</h3>
      <p className="text-green-400 font-semibold">${juego.precio}</p>
      <p className="text-sm text-gray-400">Stock: {juego.stock}</p>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => addFavorito(juego)}
          className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-lg text-black"
        >
          ⭐ Favorito
        </button>
        <button
          onClick={() => addToCarrito(juego)}
          className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg"
        >
          🛒 Agregar
        </button>
      </div>
    </div>
  );
};

export default GameCard;
