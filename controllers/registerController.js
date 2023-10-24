const Usuario = require("../model/user")


const consultarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios.');
  }
}

const registrarUsuarios =  async (req, res) => {
  const { username, password, role } = req.body;

// Validar que los campos requeridos no estén vacíos
if (!username || !password || !role) {
  console.log("Error, revise los campos")
  return res.status(400).json({ mensaje: "Error, revise los campos" });
}

const nuevoUsuario = new Usuario({ username, password, role });

try {
  await nuevoUsuario.save();
  console.log("Usuario registrado con éxito");
  res.status(200).json({ mensaje: "Usuario registrado con éxito", nuevoUsuario });
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


module.exports = {
  consultarUsuarios,
  registrarUsuarios,
  eliminarUsuarios
};