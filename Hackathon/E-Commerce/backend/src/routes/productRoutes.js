const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

module.exports = (conn) => {
  const Product = conn.model("Product", require("../models/Product").schema);

  // Obtener todos los productos
  router.get("/", (req, res) => getAllProducts(req, res, Product));

  // Obtener un producto por ID
  router.get("/:id", (req, res) => getProductById(req, res, Product));

  // Crear un producto
  router.post("/", (req, res) => createProduct(req, res, Product));

  // Actualizar un producto
  router.put("/:id", (req, res) => updateProduct(req, res, Product));

  // Eliminar un producto
  router.delete("/:id", (req, res) => deleteProduct(req, res, Product));

  return router;
};
