const Usuario = require("../model/user")
const bcrypt = require('bcryptjs');

const consultarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios.');
  }
}

const registrarUsuarios = async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    console.log("Error, revise los campos");
    return res.status(400).json({ mensaje: "Error, revise los campos" });
  }
   
  try {
    const saltRounds = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const nuevoUsuario = new Usuario({ username, hashedPassword, role, date: new Date() });
    await nuevoUsuario.save();
    console.log("Usuario registrado con éxito", nuevoUsuario);
    res.status(200).json({ mensaje: "Usuario registrado con éxito" });
  } catch (err) {
    if (err.code === 11000) {
      console.error("El nombre de usuario ya existe.");
      res.status(409).json({ mensaje: "El nombre de usuario ya existe." });
    } else {
      console.error("Error al registrar el usuario", err.message);
      res.status(500).send("Error al registrar usuario");
    }
  }
};

const eliminarUsuarios = async (req, res) => {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params.id);
  
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      console.log("Usuario eliminado correctamente")
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
}

const editarUsuarios = async (req, res) => {
    const { password, role, active, telefono, dni } = req.body;
  
    try {
      const usuario = await Usuario.findById(req.params.id);
  
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      const saltRounds = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
  
      if(hashedPassword === "") {
        
      }
      usuario.hashedPassword = hashedPassword;
      usuario.role = role;
      usuario.active = active;
      usuario.telefono = telefono;
      usuario.dni = dni;
  
      await usuario.save();
  
      res.json({ message: 'Perfil actualizado correctamente' });
      console.log("Usuario editado correctamente");
    } catch (error) {
      console.error('Error al editar el perfil del usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
  consultarUsuarios,
  registrarUsuarios,
  eliminarUsuarios,
  editarUsuarios
};