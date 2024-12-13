const Ticket = require("../models/Ticket")

const createTicket = async (req, res) => {
  const { userId, movieId, showTimeId, date, selectedSeats } = req.body;

  if (!userId || !movieId || !showTimeId || !date || !selectedSeats || selectedSeats.length === 0) {
    return res.status(400).json({ message: "Todos los campos son requeridos." });
  }

  try {
    const userExists = await User.findById(userId);
    const movieExists = await Movie.findById(movieId);
    const showTimeExists = await ShowTime.findById(showTimeId);

    if (!userExists || !movieExists || !showTimeExists) {
      return res.status(404).json({ message: "Usuario, película o función no encontrado." });
    }

    const pricePerSeat = 10000;
    const price = selectedSeats.length * pricePerSeat;

    const newTicket = new Ticket({
      userId,
      movieId,
      showTimeId,
      date,
      price,
      seats: selectedSeats.map(seat => ({
        seatId: seat.id,
        seatName: seat.name
      }))
    });

    const savedTicket = await newTicket.save();
    const populatedTicket = await Ticket.findById(savedTicket._id)
      .populate("movieId", "title")
      .populate("showTimeId", "roomId showTime");

    res.status(201).json(populatedTicket);
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
    const tickets = await Ticket.find({ userId })
      .populate("movieId", "title")
      .populate("showTimeId", "roomId showTime");

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
