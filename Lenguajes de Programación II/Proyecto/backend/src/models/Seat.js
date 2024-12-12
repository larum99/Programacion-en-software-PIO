const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  seatNumber: { type: String, required: true },
  isReserved: { type: Boolean, default: false },
});

module.exports = mongoose.model('Seat', seatSchema);
