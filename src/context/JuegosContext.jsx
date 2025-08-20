import { createContext, useContext, useState, useEffect } from "react";
import juegosData from "../data/juegosData";

const JuegosContext = createContext();

export const JuegosProvider = ({ children }) => {
  const [juegos, setJuegos] = useState(() => {
    return JSON.parse(localStorage.getItem("juegos")) || juegosData;
  });

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

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
    <JuegosContext.Provider value={{ juegos, reducirStock, recuperarStock }}>
      {children}
    </JuegosContext.Provider>
  );
};

export const useJuegos = () => useContext(JuegosContext);
