const express = require('express');
const router = express.Router();
const { getAvailableSeats, reserveSeat } = require('../controllers/seatController');

// Obtener asientos disponibles para una película y sala
router.get('/seats/:movieId/:roomId', getAvailableSeats);

// Reservar un asiento para una película y sala
router.post('/seats/reserve/:movieId/:seatId', reserveSeat);

module.exports = router;
