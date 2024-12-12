const express = require('express');
const router = express.Router();
const { getOrGenerateShowtimes } = require('../controllers/showTimeController');

// Ruta para obtener o generar horarios
router.get('/:tmdbId/:roomId', getOrGenerateShowtimes);

module.exports = router;
