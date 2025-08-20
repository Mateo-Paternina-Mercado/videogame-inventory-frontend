import { createContext, useContext, useState, useEffect } from "react";
import { getProducts } from "../services/api"; // en lugar de juegosData
import { actualizarStock } from "../services/api.js";

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

  const reducirStock = async (id) => {
    setJuegos((prev) =>
      prev.map((juego) =>
        juego._id === id && juego.cantidad > 0
          ? { ...juego, cantidad: juego.cantidad - 1 }
          : juego
      )
    );
  
    // Llamada al backend para persistir el cambio
    const juego = juegos.find((j) => j._id === id);
    if (juego && juego.cantidad > 0) {
      await actualizarStock(id, juego.cantidad - 1);
    }
  };
  
  const recuperarStock = async (id) => {
    setJuegos((prev) =>
      prev.map((juego) =>
        juego._id === id ? { ...juego, cantidad: juego.cantidad + 1 } : juego
      )
    );
  
    // Llamada al backend para persistir el cambio
    const juego = juegos.find((j) => j._id === id);
    if (juego) {
      await actualizarStock(id, juego.cantidad + 1);
    }
  };

  return (
    <JuegosContext.Provider value={{ juegos, setJuegos, reducirStock, recuperarStock }}>
      {children}
    </JuegosContext.Provider>
  );
};

export const useJuegos = () => useContext(JuegosContext);
