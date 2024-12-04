const mongoose = require("mongoose");

// Definir el esquema para productos tecnológicos
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del producto es obligatorio"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La descripción del producto es obligatoria"],
      maxlength: [500, "La descripción no puede superar los 500 caracteres"],
    },
    category: {
      type: String,
      enum: ["Laptops", "Smartphones", "Accesorios", "Periféricos", "Otros"],
      required: [true, "La categoría del producto es obligatoria"],
    },
    price: {
      type: Number,
      required: [true, "El precio del producto es obligatorio"],
      min: [0, "El precio no puede ser negativo"],
    },
    stock: {
      type: Number,
      required: [true, "El stock es obligatorio"],
      min: [0, "El stock no puede ser negativo"],
    },
    imageUrl: {
      type: String,
      required: [true, "La URL de la imagen es obligatoria"],
      match: [
        /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif))$/i,
        "La URL debe ser una imagen válida (png, jpg, jpeg, webp, gif)",
      ],
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
