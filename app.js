const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongooseConnection = require('./database/connection');
const Usuario = require("./model/modelUser")
const jwt = require('jsonwebtoken');



const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();

app.get('/registrar', async (req, res) => {
 
  try {
    const usuarios = await Usuario.find({});
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios.');
  }
});

app.post('/registrar', async (req, res) => {
const { user, password, role } = req.body;
const nuevoUsuario = new Usuario({user, password, role});

try {
await nuevoUsuario.save();
console.log("Usuario registrado con exito");
res.status(200).json({mensaje: "usuario registrado con exito", nuevoUsuario});
} catch(err){
console.error("error al registrar el usuario", err.message);
res.status(500).send("error al registrar usuario");
}
});

app.delete('/registrar/:id', async (req, res) => {
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
});

const secretKey = process.env.SECRET_KEY; 
app.post('/login', async (req, res) => {
  const { user, password } = req.body;
  const token = jwt.sign({ user }, secretKey);
  try {
    const usuario = await Usuario.findOne({ user, password });

    if (!usuario.user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    if (!usuario.password) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    console.log("Inicio de Sesión correcto!")
    return res.json({ token });
    
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
    return
  }
});


app.listen(process.env.PORT, () => {
  mongooseConnection()
  console.log(`Servidor en ejecución en http://localhost:${process.env.PORT}`);
})
