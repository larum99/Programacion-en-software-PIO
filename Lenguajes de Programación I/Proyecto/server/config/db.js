const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_MFLIX, {
      ssl: true,  // Asegúrate de que SSL está habilitado
    });
    console.log(`Conexión a MongoDB Atlas exitosa. Conectado al host: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
