import { useJuegos } from "../context/JuegosContext";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "sonner";

const CatalogoJuegos = () => {
  const { juegos, reducirStock } = useJuegos();
  const { agregarAlCarrito } = useCarrito();

  const comprarJuego = (id) => {
    const juego = juegos.find((j) => j.id === id);
    if (!juego || juego.stock <= 0) {
      toast.error(`❌ ${juego?.titulo} no tiene stock disponible`);
      return;
    }

    reducirStock(id); // 👈 Reducir stock global
    agregarAlCarrito(juego); // 👈 Guardar en carrito
    toast.success(`🎮 ${juego.titulo} agregado al carrito`);
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {juegos.map((juego) => (
        <div key={juego.id} className="bg-gray-900 rounded-xl p-4 shadow-lg">
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
