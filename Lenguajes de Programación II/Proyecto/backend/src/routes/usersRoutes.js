const express = require("express");
const { registerUser, loginUser, getAllUsers } = require("../controllers/userController");
const router = express.Router();

module.exports = (connCinema) => {
  const User = connCinema.model("User", require("../models/User").schema);

  // Registrar un nuevo usuario
  router.post("/register", (req, res) => registerUser(req, res, User));

  // Inicio de sesión
  router.post("/login", (req, res) => loginUser(req, res, User));

  // Obtener todos los usuarios
  router.get("/", (req, res) => getAllUsers(req, res, User));

  return router;
};
