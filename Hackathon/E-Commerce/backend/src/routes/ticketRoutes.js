const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicketById,
} = require("../controllers/ticketController");

const router = express.Router();

module.exports = (conn) => {
  const Ticket = conn.model("Ticket", require("../models/Ticket").schema);
  const User = conn.model("User", require("../models/User").schema);
  const Product = conn.model("Product", require("../models/Product").schema);

  // Crear un nuevo ticket
  router.post("/", (req, res) => createTicket(req, res, Ticket, User, Product));

  // Obtener todos los tickets
  router.get("/", (req, res) => getAllTickets(req, res, Ticket));

  // Obtener un ticket por ID
  router.get("/:id", (req, res) => getTicketById(req, res, Ticket));

  return router;
};
