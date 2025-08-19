import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-green-500 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-green-500 text-2xl font-extrabold tracking-widest">
          GameStore
        </h1>
        <div className="flex gap-6 text-lg font-medium">
          <Link to="/" className="text-white hover:text-green-400 transition">
            Home
          </Link>
          <Link
            to="/catalogo"
            className="text-white hover:text-green-400 transition"
          >
            Catálogo
          </Link>
          <Link
            to="/favoritos"
            className="text-white hover:text-green-400 transition"
          >
            Favoritos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
