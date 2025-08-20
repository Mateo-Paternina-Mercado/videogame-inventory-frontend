// Carrito.jsx
import { useCarrito } from "../context/CarritoContext";
import { useJuegos } from "../context/JuegosContext";

export default function Carrito() {
  const { carrito, eliminarDelCarrito, eliminarTodoDelCarrito } = useCarrito();
  const { recuperarStock } = useJuegos();

  const handleEliminar = (id) => {
    eliminarDelCarrito(id);
    recuperarStock(id); // 🔙 Recupera UNA unidad de stock
  };

  const handleEliminarTodo = (id, cantidad) => {
    eliminarTodoDelCarrito(id);
    for (let i = 0; i < cantidad; i++) {
      recuperarStock(id); // 🔙 Recupera tantas unidades como tenía
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🛒 Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No has agregado nada aún.</p>
      ) : (
        <ul className="space-y-2">
          {carrito.map((juego) => (
            <li
              key={juego.id}
              className="p-3 bg-gray-800 rounded flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-green-400">{juego.titulo}</p>
                <p className="text-sm text-gray-400">
                  ${juego.precio} x {juego.cantidad} ={" "}
                  <span className="text-white font-semibold">
                    ${(juego.precio * juego.cantidad).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEliminar(juego.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded"
                >
                  ➖ Quitar 1
                </button>
                <button
                  onClick={() => handleEliminarTodo(juego.id, juego.cantidad)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  ❌ Eliminar todo
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
