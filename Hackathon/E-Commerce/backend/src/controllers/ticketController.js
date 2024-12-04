// Crear un nuevo ticket
const createTicket = async (req, res, Ticket, User, Product) => {
    const { userId, products } = req.body;
  
    try {
      // Verificar si el usuario existe
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Calcular el total y verificar productos
      let total = 0;
      const productDetails = [];
  
      for (const item of products) {
        const product = await Product.findById(item.product);
        if (!product) {
          return res.status(404).json({ message: `Producto con ID ${item.product} no encontrado` });
        }
        if (product.stock < item.quantity) {
          return res.status(400).json({ message: `No hay suficiente stock para el producto ${product.name}` });
        }
  
        // Reducir el stock del producto
        product.stock -= item.quantity;
        await product.save();
  
        total += product.price * item.quantity;
        productDetails.push({ product, quantity: item.quantity });
      }
  
      // Crear el ticket
      const newTicket = new Ticket({ user: userId, products: productDetails, total });
      await newTicket.save();
  
      res.status(201).json({ message: "Ticket creado exitosamente", ticket: newTicket });
    } catch (error) {
      res.status(500).json({ message: "Error al crear el ticket", error: error.message });
    }
  };
  
  // Obtener todos los tickets
  const getAllTickets = async (req, res, Ticket) => {
    try {
      const tickets = await Ticket.find().populate("user").populate("products.product");
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los tickets", error: error.message });
    }
  };
  
  // Obtener un ticket por ID
  const getTicketById = async (req, res, Ticket) => {
    const { id } = req.params;
    try {
      const ticket = await Ticket.findById(id).populate("user").populate("products.product");
      if (!ticket) {
        return res.status(404).json({ message: "Ticket no encontrado" });
      }
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el ticket", error: error.message });
    }
  };
  
  module.exports = {
    createTicket,
    getAllTickets,
    getTicketById,
  };
  