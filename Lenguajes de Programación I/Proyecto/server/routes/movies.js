  const express = require("express");
  const mongoose = require("mongoose"); // Asegúrate de importar mongoose
  const Movie = require("../models/Movie");
  const router = express.Router();

  // Obtener todas las películas
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

  // Obtener una película por ID
  router.get("/:id", async (req, res) => {
    try {
      // Usa ObjectId de la siguiente manera
      const movieId = new mongoose.Types.ObjectId(req.params.id);  // Se debe usar 'new'

      const movie = await Movie.findById(movieId).select("title plot genres directors");

      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json({ message: "No se encontró la película con el ID proporcionado." });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;
