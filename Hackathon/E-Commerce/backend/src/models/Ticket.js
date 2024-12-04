const mongoose = require("mongoose");

// Definir el esquema para los tickets
const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El usuario es obligatorio"],
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "El producto es obligatorio"],
        },
        quantity: {
          type: Number,
          required: [true, "La cantidad es obligatoria"],
          min: [1, "La cantidad debe ser al menos 1"],
        },
      },
    ],
    total: {
      type: Number,
      required: [true, "El total es obligatorio"],
      min: [0, "El total no puede ser negativo"],
    },
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Pendiente", "Pagado", "Enviado", "Entregado"],
      default: "Pendiente",
    },
  },
  { timestamps: true, versionKey: false }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
