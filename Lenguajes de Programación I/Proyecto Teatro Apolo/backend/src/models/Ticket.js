const mongoose = require("mongoose");

// Definir el esquema de Ticket
const ticketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Relación con el modelo User
    required: true
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",  // Relación con el modelo Movie
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

// Crear el modelo de Ticket
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
