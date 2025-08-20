# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🎮 GameStore - Tu Tienda de Videojuegos

Este proyecto es una aplicación web desarrollada con **React + Vite + TailwindCSS**, que simula una tienda de videojuegos.  
Permite navegar por un catálogo, agregar juegos al carrito, gestionar favoritos y mantener persistencia en el contexto.

---

## 🚀 Tecnologías Usadas
- **React 18**
- **Vite**
- **TailwindCSS**
- **Context API (React)**
- **JavaScript (ES6+)**

---

## 📂 Estructura del Proyecto

```
GameStore/
│
├── public/                  # Archivos públicos
│   └── vite.svg             # Icono del proyecto
│
├── src/                     # Código fuente principal
│   ├── assets/              # Recursos estáticos
│   │   └── react.svg
│   │
│   ├── components/          # Componentes reutilizables
│   │   ├── GameCard.jsx     # Tarjeta de juego
│   │   └── Navbar.jsx       # Barra de navegación
│   │
│   ├── context/             # Manejo de estado global
│   │   └── CarritoContext.jsx
│   │
│   ├── data/                # Datos estáticos o iniciales
│   │   └── juegosData.js    # Lista de juegos disponibles
│   │
│   ├── pages/               # Páginas principales
│   │   ├── Bienvenida.jsx
│   │   ├── Carrito.jsx
│   │   ├── CatalogoJuegos.jsx
│   │   ├── Favoritos.jsx
│   │   ├── Home.jsx
│   │   ├── Juegos.jsx
│   │   └── Perfil.jsx
│   │
│   ├── services/            # Servicios y APIs
│   │   └── api.js           # Lógica para consumir datos (mock/api)
│   │
│   ├── App.css              # Estilos generales
│   ├── App.jsx              # Punto de unión de la app
│   ├── index.css            # Estilos globales
│   ├── main.jsx             # Renderizado principal
│
├── .eslintrc.js             # Configuración de ESLint
├── index.html               # Entrada principal de la app
├── package.json             # Dependencias y scripts
├── postcss.config.js        # Configuración de PostCSS
├── tailwind.config.cjs      # Configuración de TailwindCSS
├── vite.config.js           # Configuración de Vite
└── README.md                # Documentación del proyecto
```

---

## ⚙️ Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   cd GameStore
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Generar build de producción:
   ```bash
   npm run build
   ```

---

## 📌 Funcionalidades
- Catálogo de videojuegos dinámico.
- Carrito de compras con persistencia en contexto.
- Gestión de favoritos por usuario.
- Sistema de navegación entre páginas (React Router).
- Estilos responsivos con TailwindCSS.

---

## 👨‍💻 Autor
Desarrollado por **Mateo Paternina Mercado**  

