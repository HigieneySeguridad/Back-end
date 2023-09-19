const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require("cors")
const app = express();
const port = 3000;

app.use(cors());
require('dotenv').config();


mongoose.connect(process.env.URI_MONGODB);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a la base de datos:', error);
});

db.once('open', () => {
  console.log('Conexión exitosa a la base de datos.');
});

const usuarioSchema = new mongoose.Schema({
  user: String,
  password: String,
  /* role: String */
},
);

const Usuario = mongoose.model('Usuario', usuarioSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/registrar', async (req, res) => {
  try {
    // Accede a la base de datos a través de "client.db()"
    const usuarios = await Usuario.find({});
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios.');
  }
});

app.post('/registrar', (req, res) => {
  const { user, password } = req.body;

  const nuevoUsuario = new Usuario({user, password});

try {
  nuevoUsuario.save();
  console.log("Usuario registrado con exito");
  res.status(200).json({mensaje: "usuario registrado con exito"});
} catch(err){
   console.error("error al registrar el usuario", err);
   res.status(500).send("error al registrar usuario");
}
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
})
