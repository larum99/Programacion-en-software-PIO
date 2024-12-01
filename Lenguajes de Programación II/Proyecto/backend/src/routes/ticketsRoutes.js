const express = require("express");
const { createTicket, getAllTickets } = require("../controllers/ticketController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

module.exports = (connCinema) => {
  // Registrar las rutas para tickets
  router.post("/", authMiddleware, (req, res) => createTicket(req, res));
  router.get("/", authMiddleware, (req, res) => getAllTickets(req, res));

  return router;
};
