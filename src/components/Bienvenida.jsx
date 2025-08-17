import React from "react"

function Bienvenida() {
  return (
    <header className="flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-4xl font-extrabold mb-4">
        Bienvenido a <span className="text-yellow-400">GameStore</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-xl">
        Tu tienda de videojuegos online donde podrás encontrar tus títulos favoritos,
        guardar en favoritos y gestionar tu inventario gamer.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition">
        Explorar Juegos
      </button>
    </header>
  )
}

export default Bienvenida
