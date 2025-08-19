import { useEffect, useState } from "react";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(guardados);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <h2 className="text-green-400 text-3xl font-bold mb-6 text-center">
        ⭐ Tus Favoritos
      </h2>
      {favoritos.length === 0 ? (
        <p className="text-center text-gray-400">
          No tienes juegos guardados aún.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritos.map((juego) => (
            <div
              key={juego.id}
              className="bg-black border border-green-500 rounded-xl p-4 shadow-lg"
            >
              <img
                src={juego.imagen}
                alt={juego.titulo}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-green-300">
                {juego.titulo}
              </h3>
              <p className="text-gray-300 text-sm">{juego.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
