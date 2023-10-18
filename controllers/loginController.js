const Usuario = require("../model/user")

const iniciarSesion = async (req, res) => {
    const { user, password } = req.body;
  
    try {
      const usuario = await Usuario.findOne({ user, password });
  
      if (!usuario) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }
  
      
      if (!password) {
        return res.status(401).json({ message: 'Contraseña incorrectas' });
      }
  
      console.log("Inicio de Sesión correcto!")
      res.status(200).json({message: "Has iniciado Sesión"})
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  module.exports = {iniciarSesion}