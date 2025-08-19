import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bienvenida from "./pages/Bienvenida";
import CatalogoJuegos from "./pages/CatalogoJuegos";
import Juegos from "./pages/Juegos";
import Perfil from "./pages/Perfil";
import Favoritos from "./pages/Favoritos";
import Carrito from "./pages/Carrito";
import { CarritoProvider } from "./context/CarritoContext";
import { useState, useEffect } from "react";

// 🔥 importar Toaster de sonner
import { Toaster } from "sonner";

function App() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(storedFavs);
  }, []);

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
    <CarritoProvider>
      <Router>
        <div className="bg-gray-900 min-h-screen text-white">
          <Navbar />
          <div className="pt-20 px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bienvenida" element={<Bienvenida />} />
              <Route
                path="/catalogo"
                element={<CatalogoJuegos addFavorito={addFavorito} />}
              />
              <Route
                path="/juegos"
                element={<Juegos addFavorito={addFavorito} />}
              />
              <Route path="/perfil" element={<Perfil />} />
              <Route
                path="/favoritos"
                element={
                  <Favoritos
                    favoritos={favoritos}
                    removeFavorito={removeFavorito}
                  />
                }
              />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </div>

          {/* Toaster gamer 💚 */}
          <Toaster
            richColors
            position="top-right"
            toastOptions={{
              style: {
                background: "#111",
                color: "#0f0", // verde Razer
                border: "1px solid #0f0",
                fontFamily: "monospace",
              },
            }}
          />
        </div>
      </Router>
    </CarritoProvider>
  );
}

export default App;
