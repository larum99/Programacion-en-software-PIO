const Seat = require("../models/Seat");

// Obtener asientos disponibles para una sala
const getAvailableSeats = async (req, res) => {
  const { movieId, roomId } = req.params;

  try {
    // Busca los asientos de la película y sala especificadas
    const seats = await Seat.find({ movieId, roomId, isReserved: false });

    if (seats.length === 0) {
      return res
        .status(404)
        .json({
          message:
            "No hay asientos disponibles para esta película en esta sala.",
        });
    }

    res.status(200).json(seats);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los asientos disponibles." });
  }
};

// Reservar un asiento
const reserveSeat = async (req, res) => {
  const { movieId, seatId } = req.params;

  try {
    // Busca el asiento por su ID y la película especificada
    const seat = await Seat.findOne({ _id: seatId, movieId });

    if (!seat) {
      return res
        .status(404)
        .json({
          message:
            "Asiento no encontrado o no corresponde a la película seleccionada.",
        });
    }

    if (seat.isReserved) {
      return res
        .status(400)
        .json({ message: "Este asiento ya está reservado." });
    }

    // Marca el asiento como reservado
    seat.isReserved = true;
    await seat.save();

    res.status(200).json({ message: "Asiento reservado con éxito.", seat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al reservar el asiento." });
  }
};

module.exports = { getAvailableSeats, reserveSeat };
