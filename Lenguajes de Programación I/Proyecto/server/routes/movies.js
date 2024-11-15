const express = require("express");
const mongoose = require("mongoose");
const Movie = require("../models/movie");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    if (movies.length > 0) {
      res.json(movies);
    } else {
      res.status(404).json({ message: "No se encontraron películas." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener la primera película
router.get("/:id", async (req, res) => {
  try {
    const movieId = new mongoose.Types.ObjectId(req.params.id); //corvertir id a objectid

    const movie = await Movie.findById(movieId).select("title plot genres directors cast");

    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: "No se encontró ninguna película." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
