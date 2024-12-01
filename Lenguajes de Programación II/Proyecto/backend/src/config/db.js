const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Conexión primaria a sample_mflix
    const connMflix = await mongoose.connect(process.env.MONGO_URI_MFLIX, {
      ssl: true,
    });
    console.log(`Conexión a MongoDB Atlas exitosa (sample_mflix). Conectado al host: ${connMflix.connection.host}`);

    // Conexión secundaria para cinema
    const connCinema = mongoose.createConnection(process.env.MONGO_URI_CINEMA, {
      ssl: true,
    });

    // Verificar que la conexión secundaria está activa
    connCinema.once('open', () => {
      console.log(`Conexión a MongoDB Atlas exitosa (cinema). Conectado al host: ${connCinema.host}`);
    });

    // Retornar ambas conexiones
    return { connMflix, connCinema };
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
