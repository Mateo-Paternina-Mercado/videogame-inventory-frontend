import React from "react"

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">🎮 GameStore</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-yellow-400">Inicio</a></li>
          <li><a href="#" className="hover:text-yellow-400">Juegos</a></li>
          <li><a href="#" className="hover:text-yellow-400">Favoritos</a></li>
          <li><a href="#" className="hover:text-yellow-400">Perfil</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
