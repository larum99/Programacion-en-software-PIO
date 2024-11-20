const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

module.exports = (connCinema) => {
  const User = connCinema.model("User", require("../models/User").schema);

  // Registrar un nuevo usuario
  router.post("/register", async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName, idDocument, idNumber, birthDate, phoneNumber } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Las contraseñas no coinciden" });
    }
  
    try {
      const newUser = new User({ email, password, firstName, lastName, idDocument, idNumber, birthDate, phoneNumber });
      await newUser.save();
      res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (err) {
      res.status(500).json({ message: "Error al registrar usuario", error: err.message });
    }
  });

  // Inicio de sesión
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token válido por 1 hora
    });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (err) {
    res.status(500).json({ message: "Error al iniciar sesión", error: err.message });
  }
});

  // Obtener todos los usuarios
  router.get("/", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};
