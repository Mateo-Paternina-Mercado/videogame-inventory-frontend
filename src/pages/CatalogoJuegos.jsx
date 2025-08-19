import juegosData from "../data/juegosData";

const CatalogoJuegos = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <h2 className="text-green-400 text-3xl font-bold mb-6 text-center">
        📚 Catálogo de Juegos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {juegosData.map((juego) => (
          <div
            key={juego.id}
            className="bg-black border border-green-500 rounded-xl p-4 shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105"
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
    </div>
  );
};

export default CatalogoJuegos;
