const express = require("express");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movies");
require("dotenv").config();

const app = express();

// Conectar a la base de datos
connectDB();

// middleware para rutas
//Usar las rutas de películas
app.use("/movies", movieRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
