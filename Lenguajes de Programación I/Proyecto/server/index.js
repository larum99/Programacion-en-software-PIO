const express = require("express");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movies");
const userRoutes = require("./routes/users");
require("dotenv").config();

const app = express();
app.use(express.json());

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

(async () => {
  try {
    // Conectar a ambas bases de datos
    const { connMflix, connCinema } = await connectDB();

    // Usar las rutas de películas para la conexión primaria (sample_mflix)
    app.use("/movies", movieRoutes);

    // Usar las rutas de usuarios para la conexión secundaria (cinema)
    app.use("/users", userRoutes(connCinema)); // Pasa la conexión secundaria al manejador de usuarios

  } catch (error) {
    console.error("Error al conectar a las bases de datos:", error.message);
    process.exit(1); // Finaliza el proceso si ocurre un error
  }})();
