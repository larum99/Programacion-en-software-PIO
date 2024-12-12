const express = require("express");
const cors = require('cors');
const movieRoutes = require("./routes/moviesRoutes");
const userRoutes = require("./routes/usersRoutes");
const ticketsRoutes = require("./routes/ticketsRoutes")
const roomsRoutes = require("./routes/roomsRoutes");
const showTimesRoutes = require("./routes/showTimesRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

// Crear la app de Express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Configuración de las rutas
(async () => {
  try {
    const connCinema = await connectDB();

    // Rutas para películas (ahora conectadas a TMDB)
    app.use("/movies", movieRoutes);

    // Rutas para usuarios
    app.use("/users", userRoutes(connCinema));
    
    // Rutas para tickets
    app.use("/tickets", ticketsRoutes(connCinema));

    app.use("/rooms", roomsRoutes);

    app.use("/showtimes", showTimesRoutes);
    
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    process.exit(1);
  }
})();

module.exports = app;
