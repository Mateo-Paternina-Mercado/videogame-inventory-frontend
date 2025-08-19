// src/context/CarritoContext.jsx
import { createContext, useState } from "react";
import { useCarrito } from "./useCarrito";

// 1. Crear contexto
const CarritoContext = createContext();

// 2. Hook personalizado
 export const useCarrito = () => {
   const context = useContext(CarritoContext);
   if (!context) {
     throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
   }
   return context;
 };



// 3. Provider
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCarrito = (juego) => {
    setCarrito((prev) => [...prev, juego]);
  };

  const removeFromCarrito = (id) => {
    setCarrito((prev) => prev.filter((juego) => juego.id !== id));
  };

  const clearCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider value={{ carrito, addToCarrito, removeFromCarrito, clearCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
