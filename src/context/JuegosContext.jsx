import { createContext, useContext, useState, useEffect } from "react";
import { getProducts } from "../services/api"; // en lugar de juegosData

export const JuegosContext = createContext();

export const JuegosProvider = ({ children }) => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setJuegos(data);
      } catch (err) {
        console.error("Error cargando productos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Reducir stock al comprar
  const reducirStock = (id) => {
    setJuegos((prev) =>
      prev.map((juego) =>
        juego.id === id && juego.stock > 0
          ? { ...juego, stock: juego.stock - 1 }
          : juego
      )
    );
  };

  // Recuperar stock al eliminar del carrito
  const recuperarStock = (id) => {
    setJuegos((prev) =>
      prev.map((juego) =>
        juego.id === id ? { ...juego, stock: juego.stock + 1 } : juego
      )
    );
  };

  return (
    <JuegosContext.Provider value={{ juegos, setJuegos, reducirStock, recuperarStock }}>
      {children}
    </JuegosContext.Provider>
  );
};

export const useJuegos = () => useContext(JuegosContext);
