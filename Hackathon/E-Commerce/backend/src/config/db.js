const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_ECOMMERCE, {
      ssl: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    throw error;
  }
};

module.exports = connectDB;
