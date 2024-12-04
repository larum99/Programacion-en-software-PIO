const express = require("express");
const movieController = require("../controllers/movieController");
const router = express.Router();

// Obtener todas las películas desde TMDb
router.get("/tmdb/all", movieController.getAllMoviesFromTMDb);

// Ruta para obtener las películas en cartelera

router.get('/now-playing', movieController.getNowPlayingMoviesFromTMDb);

module.exports = router;
