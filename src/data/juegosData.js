
const juegos = [
  {
    id: 1,
    titulo: "Cyberpunk 2077",
    descripcion: "RPG futurista en un mundo abierto lleno de acción y decisiones.",
    categoria: "RPG",
    precio: 199000,
    imagen: "https://cdn1.epicgames.com/offer/cyberpunk2077/EGS_Cyberpunk2077_CDPRED_StoreLandscape_2560x1440-f9dba2fdcf60fbbdf148d98efb725f38"
  },
  {
    id: 2,
    titulo: "The Witcher 3: Wild Hunt",
    descripcion: "Un épico RPG de mundo abierto con Geralt de Rivia.",
    categoria: "RPG",
    precio: 159000,
    imagen: "https://cdn1.epicgames.com/offer/witcher3/W3C_Landscape_2560x1440-2560x1440-5f8c5b97ef09e63e38cb6f3ddf20a27f"
  },
  {
    id: 3,
    titulo: "Elden Ring",
    descripcion: "Acción y exploración en un mundo abierto creado por FromSoftware.",
    categoria: "RPG",
    precio: 259000,
    imagen: "https://cdn1.epicgames.com/offer/eldenring/ELDENRING_StoreLandscape_2560x1440-2560x1440-6fda8c91b9fc9d8a3c3f1c5f9c3f1c07"
  },
  {
    id: 4,
    titulo: "Call of Duty: Modern Warfare II",
    descripcion: "Shooter táctico multijugador con gráficos realistas.",
    categoria: "Shooter",
    precio: 289000,
    imagen: "https://cdn1.epicgames.com/offer/codmw2/EPIC_Landscape_2560x1440-2560x1440-2a4182a3fd40e928a3b5c8322c2e9a15"
  },
  {
    id: 5,
    titulo: "Minecraft",
    descripcion: "Juego de construcción y aventuras en un mundo infinito.",
    categoria: "Sandbox",
    precio: 99000,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/f8b51d3c6d09fce3c365a2dd3d8e7e54.png"
  },
  {
    id: 6,
    titulo: "Fortnite",
    descripcion: "Battle Royale con construcción y skins épicas.",
    categoria: "Battle Royale",
    precio: 0,
    imagen: "https://cdn1.epicgames.com/offer/fortnite/Fortnite_Store_Landscape_2560x1440-2560x1440-493b7e5c84105a5373bda0c0d3a4f8e0"
  },
  {
    id: 7,
    titulo: "League of Legends",
    descripcion: "MOBA competitivo 5v5 con campeones únicos.",
    categoria: "MOBA",
    precio: 0,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/4c0d61d74a8a30c4cfd10599db1f2a02.png"
  },
  {
    id: 8,
    titulo: "Valorant",
    descripcion: "Shooter táctico competitivo con habilidades únicas.",
    categoria: "Shooter",
    precio: 0,
    imagen: "https://cdn1.epicgames.com/offer/valorant/VALORANT_EGS_2560x1440_Landscape_2560x1440-f1d51ac3f1da0a3eec74b0c3e4f6d4e3"
  },
  {
    id: 9,
    titulo: "Overwatch 2",
    descripcion: "Shooter por equipos con héroes únicos y dinámicas rápidas.",
    categoria: "Shooter",
    precio: 0,
    imagen: "https://cdn1.epicgames.com/offer/overwatch2/OW2_Landscape_2560x1440-2560x1440-61dd3a77c3aeb8df5c16f2d13d1e6c4f"
  },
  {
    id: 10,
    titulo: "Red Dead Redemption 2",
    descripcion: "Aventura en el Salvaje Oeste con realismo impresionante.",
    categoria: "Aventura",
    precio: 249000,
    imagen: "https://cdn1.epicgames.com/offer/reddeadredemption2/RDR2_Landscape_2560x1440-2560x1440-908db8b27c65c2f4d62f4f9d1b2b23d0"
  },
  {
    id: 11,
    titulo: "Grand Theft Auto V",
    descripcion: "Acción y mundo abierto en Los Santos.",
    categoria: "Acción",
    precio: 149000,
    imagen: "https://cdn1.epicgames.com/offer/gta-v/GTAV_EGS_Landscape_2560x1440-2560x1440-1d2b2cbfcb8d52d05f7c9bdf62a8a57f"
  },
  {
    id: 12,
    titulo: "Hollow Knight",
    descripcion: "Metroidvania con combate desafiante y un mundo misterioso.",
    categoria: "Indie",
    precio: 49000,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/1838f88bb1f4788dc87f4f4c6b4e276c.png"
  },
  {
    id: 13,
    titulo: "Stardew Valley",
    descripcion: "Simulador de granja y vida tranquila en un pueblo encantador.",
    categoria: "Simulación",
    precio: 39000,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/f50d80f5bcbba3401b8f4dd97eb2a5da.png"
  },
  {
    id: 14,
    titulo: "Among Us",
    descripcion: "Multijugador social de engaño y cooperación.",
    categoria: "Party",
    precio: 15000,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/5ab5a2b28e9df9b3c5e6d232c3a3f27e.png"
  },
  {
    id: 15,
    titulo: "Counter-Strike 2",
    descripcion: "Shooter táctico competitivo de referencia mundial.",
    categoria: "Shooter",
    precio: 0,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/9e4b29b28b5a4c09a7d4c21ee8f3f83a.png"
  },
  {
    id: 16,
    titulo: "Dota 2",
    descripcion: "MOBA legendario de estrategia y trabajo en equipo.",
    categoria: "MOBA",
    precio: 0,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/785d38fdbbd46e2e5c58b14f23d8b95e.png"
  },
  {
    id: 17,
    titulo: "FIFA 24",
    descripcion: "El simulador de fútbol más realista y popular del mundo.",
    categoria: "Deportes",
    precio: 299000,
    imagen: "https://cdn1.epicgames.com/offer/fifa24/FIFA24_Landscape_2560x1440-2560x1440-ffb4f7bbf0e3f32b40dcbef7c6b43bbf"
  },
  {
    id: 18,
    titulo: "Rocket League",
    descripcion: "Fútbol con autos en partidas intensas.",
    categoria: "Deportes",
    precio: 0,
    imagen: "https://cdn1.epicgames.com/offer/rocketleague/RL_Landscape_2560x1440-2560x1440-157cc67e2a73dd9096f6d3a3cc8b2a4b"
  },
  {
    id: 19,
    titulo: "Assassin’s Creed Valhalla",
    descripcion: "Explora la era vikinga en un épico mundo abierto.",
    categoria: "Acción",
    precio: 229000,
    imagen: "https://cdn1.epicgames.com/offer/acvalhalla/ACV_Landscape_2560x1440-2560x1440-50b1c2a5a0d1249af6e47d8c5b7df4d1"
  },
  {
    id: 20,
    titulo: "Diablo IV",
    descripcion: "RPG de acción oscura con demonios y mazmorras.",
    categoria: "RPG",
    precio: 299000,
    imagen: "https://cdn1.epicgames.com/offer/diablo4/DIABLO4_Landscape_2560x1440-2560x1440-923fa4f43f3b0d1b3d92ddcaabb3c2ac"
  },
  {
    id: 21,
    titulo: "Hades",
    descripcion: "Roguelike de acción con temática mitológica griega.",
    categoria: "Indie",
    precio: 79000,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/7e3e6cf01b1b4c8d2a8a5a0f15bb01f8.png"
  },
  {
    id: 22,
    titulo: "Fall Guys",
    descripcion: "Party game de carreras y obstáculos multijugador.",
    categoria: "Party",
    precio: 0,
    imagen: "https://cdn1.epicgames.com/offer/fallguys/FG_Landscape_2560x1440-2560x1440-3052a2c67db4c6a34d93d9a5c7d1b46d"
  },
  {
    id: 23,
    titulo: "Resident Evil 4 Remake",
    descripcion: "Survival horror con acción y atmósfera intensa.",
    categoria: "Horror",
    precio: 239000,
    imagen: "https://cdn1.epicgames.com/offer/re4remake/RE4R_Landscape_2560x1440-2560x1440-6df1a3f8c4b9a2f8dfd5f3a5e3b9d4f5"
  },
  {
    id: 24,
    titulo: "Dark Souls III",
    descripcion: "Acción desafiante con un mundo oscuro y épico.",
    categoria: "RPG",
    precio: 189000,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/dark_souls_iii.png"
  },
  {
    id: 25,
    titulo: "Sekiro: Shadows Die Twice",
    descripcion: "Acción intensa con combate de espadas en Japón feudal.",
    categoria: "Acción",
    precio: 199000,
    imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/image/sekiro.png"
  }
];

export default juegos;
