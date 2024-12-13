const express = require('express');
const router = express.Router();
const { getAvailableSeats, reserveSeat } = require('../controllers/seatController');

router.get('/:roomName', getAvailableSeats);

router.put('/reserve/:seatId', reserveSeat);

module.exports = router;
