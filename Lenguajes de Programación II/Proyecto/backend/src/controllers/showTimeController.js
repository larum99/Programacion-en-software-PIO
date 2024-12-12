const ShowTime = require('../models/ShowTime');

const getOrGenerateShowtimes = async (req, res) => {
  const { tmdbId, roomId } = req.params;

  try {
    // Busca horarios existentes para la película y sala
    let showtimes = await ShowTime.find({ movieId: tmdbId, roomId });

    if (showtimes.length === 0) {
      // Si no existen, genera horarios automáticamente
      const defaultTimes = ["12:00", "15:00", "18:00", "21:00"];
      const today = new Date().toISOString().split('T')[0]; // Fecha actual

      // Crea los horarios
      showtimes = defaultTimes.map((time) => ({
        movieId: tmdbId,
        roomId,
        showDate: today,
        showTime: time,
        seatsAvailable: 100, // Asientos predeterminados
      }));

      // Guarda los nuevos horarios en la base de datos
      await ShowTime.insertMany(showtimes);
    }

    // Devuelve los horarios existentes o recién creados
    res.status(200).json(showtimes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al generar o recuperar horarios." });
  }
};

module.exports = { getOrGenerateShowtimes };
