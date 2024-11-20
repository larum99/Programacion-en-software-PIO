const express = require("express");
const { createTicket, getAllTickets } = require("../controllers/ticketController");
const router = express.Router();

module.exports = (connCinema) => {
  // Registrar las rutas para tickets
  router.post("/", (req, res) => createTicket(req, res));
  router.get("/", (req, res) => getAllTickets(req, res));

  return router;
};
