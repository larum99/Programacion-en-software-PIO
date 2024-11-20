const Ticket = require("../models/Ticket"); // Asegúrate de que tienes el modelo Ticket creado

// Crear un nuevo ticket
const createTicket = async (req, res) => {
  const { userId, movieId, date } = req.body;

  if (!userId || !movieId || !date) {
    return res.status(400).json({ message: "Todos los campos son requeridos." });
  }

  try {
    const newTicket = new Ticket({ userId, movieId, date });
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (err) {
    res.status(500).json({ message: "Error al crear la reserva", error: err.message });
  }
};

// Obtener todos los tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate("userId", "email").populate("movieId", "title");
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener las reservas", error: err.message });
  }
};

// Obtener tickets de un usuario específico
const getUserTickets = async (req, res) => {
  const { userId } = req.params;

  try {
    const tickets = await Ticket.find({ userId }).populate("movieId", "title");
    if (tickets.length === 0) {
      return res.status(404).json({ message: "No se encontraron reservas para este usuario." });
    }
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener las reservas del usuario", error: err.message });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getUserTickets,
};
