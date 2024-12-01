const mongoose = require("mongoose");
const Movie = require("../models/Movie");

// Obtener todas las películas
const getAllMovies = async (req, res) => {
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
};

// Obtener una película por ID
const getMovieById = async (req, res) => {
  try {
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
};

module.exports = { getAllMovies, getMovieById };
