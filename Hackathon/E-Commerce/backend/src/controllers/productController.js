// Obtener todos los productos
const getAllProducts = async (req, res, Product) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener productos", error: error.message });
    }
  };
  
  // Obtener un producto por ID
  const getProductById = async (req, res, Product) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el producto", error: error.message });
    }
  };
  
  // Crear un nuevo producto
  const createProduct = async (req, res, Product) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json({ message: "Producto creado exitosamente", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: "Error al crear el producto", error: error.message });
    }
  };
  
  // Actualizar un producto
  const updateProduct = async (req, res, Product) => {
    const { id } = req.params;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.status(200).json({ message: "Producto actualizado exitosamente", product: updatedProduct });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
    }
  };
  
  // Eliminar un producto
  const deleteProduct = async (req, res, Product) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el producto", error: error.message });
    }
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
  