const express = require("express");
const { getAllRooms, createRoom, getSeatsByRoom } = require("../controllers/roomController");

const router = express.Router();

router.get("/", getAllRooms); // Obtener todas las salas

router.get("/:roomId/seats", getSeatsByRoom); // Obtener asientos de una sala específica

module.exports = router;
