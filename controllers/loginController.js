const Usuario = require("../model/user")
const jwt = require('jsonwebtoken');


const iniciarSesion = async (req, res) => {
    const { username, password } = req.body;
    
    try {
      const usuario = await Usuario.findOne({ username });
      
      if (!usuario) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      } 
      
      if (password !== usuario.password) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
      const token = jwt.sign({ username, password }, process.env.SECRET_KEY);
      
      console.log("Inicio de Sesión correcto!")

      res.json({ token, role: usuario.role, nombre: usuario.username });
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  module.exports = {iniciarSesion}