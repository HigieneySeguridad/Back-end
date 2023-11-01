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

      const payload = { username, password }
      const horaEnSegundos = 60 * 6; //hace que el token dure 1 hora
      const exp = Math.floor(Date.now() / 1000) + horaEnSegundos;

      const token = jwt.sign({...payload, exp }, process.env.SECRET_KEY);
      
      console.log("Inicio de Sesión correcto!")

      res.json({ token, role: usuario.role, nombre: usuario.username });
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  module.exports = {iniciarSesion}