import React from "react"
import Navbar from "./components/Navbar"
import Bienvenida from "./components/Bienvenida"
import CatalogoJuegos from "./components/CatalogoJuegos"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Bienvenida />
      <CatalogoJuegos />
    </div>
  )
}

export default App
