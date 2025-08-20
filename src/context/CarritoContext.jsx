import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // 👉 Agregar juego con control de cantidad
  const agregarAlCarrito = (juego) => {
    setCarrito((prev) => {
      const existente = prev.find((j) => j.id === juego.id);
      if (existente) {
        return prev.map((j) =>
          j.id === juego.id ? { ...j, cantidad: j.cantidad + 1 } : j
        );
      }
      return [...prev, { ...juego, cantidad: 1 }];
    });
  };

  // 👉 Eliminar UNA unidad del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => {
      const existente = prev.find((j) => j.id === id);
      if (!existente) return prev;
      if (existente.cantidad > 1) {
        return prev.map((j) =>
          j.id === id ? { ...j, cantidad: j.cantidad - 1 } : j
        );
      }
      return prev.filter((j) => j.id !== id);
    });
  };

  // 👉 Eliminar TODO un juego del carrito
  const eliminarTodoDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((j) => j.id !== id));
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, eliminarTodoDelCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
