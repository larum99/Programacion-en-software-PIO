const jwt = require('jsonwebtoken'); // Para verificar el token

const authMiddleware = (req, res, next) => {
  // Obtener el token del encabezado Authorization
  const token = req.header('Authorization')?.replace('Bearer ', '');


  if (!token) {
    return res.status(401).json({ msg: 'Acceso no autorizado. No hay token.' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET debe estar en .env
    req.user = decoded.user; // Añadir la información del usuario al objeto req
    next(); // Continuar con la siguiente función (controlador)
  } catch (error) {
    return res.status(401).json({ msg: 'Token no válido.' });
  }
};

module.exports = authMiddleware;
