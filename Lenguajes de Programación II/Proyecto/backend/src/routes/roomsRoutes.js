const express = require("express");
const { getAllRooms, createRoom, getSeatsByRoom } = require("../controllers/roomController");

const router = express.Router();

router.get("/", getAllRooms);
router.get("/:roomId/seats", getSeatsByRoom);

module.exports = router;
