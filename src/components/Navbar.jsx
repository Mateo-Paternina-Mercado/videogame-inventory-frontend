// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";


function Navbar() {
  const { carrito } = useCarrito();

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Gamer */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-500 hover:text-green-400 transition duration-300"
        >
          🎮 GameStore
        </Link>

        {/* Links */}
        <div className="flex space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-green-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/catalogo"
            className="hover:text-green-400 transition duration-300"
          >
            Catálogo
          </Link>
          <Link
            to="/favoritos"
            className="hover:text-green-400 transition duration-300"
          >
            Favoritos
          </Link>
          <Link
            to="/perfil"
            className="hover:text-green-400 transition duration-300"
          >
            Perfil
          </Link>

          {/* Carrito con badge */}
          <Link
            to="/carrito"
            className="relative hover:text-green-400 transition duration-300"
          >
            🛒 Carrito
            {carrito.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-md">
                {carrito.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
