const Usuario = require("../model/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const iniciarSesion = async (req, res) => {
  const { username, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ username });

    if (!usuario) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }
    if(usuario.active === false){
      return res.status(400).json({message: "Usuario inactivo"})
    }
    //Comparar la contraseña proporcionada con la contraseña encriptada almacenada
    const match = bcrypt.compareSync(password, usuario.hashedPassword);

    if (!match) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    } 

    const payload = { username };
    const token = jwt.sign({ ...payload }, process.env.SECRET_KEY);

    console.log("Inicio de Sesión correcto!");

    res.json({ token, role: usuario.role, nombre: usuario.username, userId: usuario._id,dni: usuario.dni,telefono: usuario.telefono  });
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


module.exports = {iniciarSesion}