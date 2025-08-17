import React from "react"

const juegos = [
  {
    id: 1,
    titulo: "The Legend of Zelda: Breath of the Wild",
    descripcion: "Explora un vasto mundo abierto lleno de misterios y aventuras.",
    imagen: "https://i.ibb.co/vzB3b7S/zelda.jpg"
  },
  {
    id: 2,
    titulo: "Elden Ring",
    descripcion: "Un desafiante RPG de mundo abierto creado por FromSoftware.",
    imagen: "https://i.ibb.co/2cQYcqM/elden-ring.jpg"
  },
  {
    id: 3,
    titulo: "God of War: Ragnarök",
    descripcion: "Acompaña a Kratos y Atreus en una épica aventura nórdica.",
    imagen: "https://i.ibb.co/9ZcLQv7/godofwar.jpg"
  },
  {
    id: 4,
    titulo: "Minecraft",
    descripcion: "Crea, explora y sobrevive en mundos infinitos generados al azar.",
    imagen: "https://i.ibb.co/Ytwqkbc/minecraft.jpg"
  }
]

function CatalogoJuegos() {
  const agregarAFavoritos = (titulo) => {
    alert(`${titulo} agregado a Favoritos ✅`)
  }

  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Catálogo de <span className="text-yellow-400">Juegos</span>
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {juegos.map((juego) => (
          <div 
            key={juego.id} 
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <img src={juego.imagen} alt={juego.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{juego.titulo}</h3>
              <p className="text-gray-400 text-sm mt-2">{juego.descripcion}</p>
              <button
                onClick={() => agregarAFavoritos(juego.titulo)}
                className="mt-4 w-full px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
              >
                ⭐ Agregar a Favoritos
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CatalogoJuegos
