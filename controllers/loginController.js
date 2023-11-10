const Usuario = require("../model/user")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const iniciarSesion = async (req, res) => {
  const { username, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ username });

    if (!usuario) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con la contraseña encriptada almacenada
    const match = await bcrypt.compare(password, usuario.hashedPassword);

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

const editarPerfil = async (req, res) => {
  const { userId } = req.params;
  const { telefono, dni } = req.body;

  try {
    const usuario = await Usuario.findById(userId);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // No actualices el nombre de usuario
    usuario.telefono = telefono;
    usuario.dni = dni;

    await usuario.save();

    res.json({ message: 'Perfil actualizado correctamente' });
  } catch (error) {
    console.error('Error al editar el perfil del usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {iniciarSesion,editarPerfil}