const express = require("express");
const movieRoutes = require("./routes/moviesRoutes");
const userRoutes = require("./routes/usersRoutes");
const connectDB = require("./config/db");
const ticketsRoutes = require("./routes/ticketsRoutes")
require("dotenv").config();

// Crear la app de Express
const app = express();

// Middlewares
app.use(express.json());

// Configuración de las rutas
(async () => {
  try {
    const { connMflix, connCinema } = await connectDB();

    // Rutas para películas
    app.use("/movies", movieRoutes);

    // Rutas para usuarios (con conexión secundaria)
    app.use("/users", userRoutes(connCinema));
    
    // Rutas para tickets (con conexión secundaria)
    app.use("/tickets", ticketsRoutes(connCinema));
    
  } catch (error) {
    console.error("Error al conectar a las bases de datos:", error.message);
    process.exit(1);
  }
})();

module.exports = app;
