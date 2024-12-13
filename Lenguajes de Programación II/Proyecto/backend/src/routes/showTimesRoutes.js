const express = require('express');
const router = express.Router();
const { getOrGenerateShowtimes } = require('../controllers/showTimeController');

router.get('/:tmdbId', getOrGenerateShowtimes);

module.exports = router;
