import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bienvenida from "./pages/Bienvenida";
import CatalogoJuegos from "./pages/CatalogoJuegos";
import Juegos from "./pages/Juegos";
import Perfil from "./pages/Perfil";
import Favoritos from "./pages/Favoritos";
import { useState, useEffect } from "react";

function App() {
  const [favoritos, setFavoritos] = useState([]);

  // cargar favoritos de localStorage
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(storedFavs);
  }, []);

  // guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const addFavorito = (juego) => {
    if (!favoritos.find((f) => f.id === juego.id)) {
      setFavoritos([...favoritos, juego]);
    }
  };

  const removeFavorito = (id) => {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <div className="pt-20 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bienvenida" element={<Bienvenida />} />
            <Route path="/catalogo" element={<CatalogoJuegos addFavorito={addFavorito} />} />
            <Route path="/juegos" element={<Juegos addFavorito={addFavorito} />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/favoritos" element={<Favoritos favoritos={favoritos} removeFavorito={removeFavorito} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
