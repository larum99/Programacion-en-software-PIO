const express = require("express");
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const ticketRoutes = require("./routes/ticketRoutes")
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
    // Conectar a la base de datos
    const conn = await connectDB();

    console.log(`Conexión a MongoDB exitosa: ${conn.connection.name} en el host ${conn.connection.host}`);

    // Configurar la ruta base `/users`
    app.use("/users", userRoutes(conn));

    app.use("/products", productRoutes(conn));

    app.use("/tickets", ticketRoutes(conn));
    
  } catch (error) {
    console.error("Error al conectar a las bases de datos:", error.message);
    process.exit(1);
  }
})();

module.exports = app;
