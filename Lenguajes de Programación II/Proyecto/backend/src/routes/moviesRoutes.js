const express = require("express");
const movieController = require("../controllers/movieController");
const router = express.Router();

// Obtener todas las películas
router.get("/", movieController.getAllMovies);

// Obtener una película por ID
router.get("/:id", movieController.getMovieById);

module.exports = router;
