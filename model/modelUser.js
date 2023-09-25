const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true, // Hace que el campo sea requerido
  },
  password: {
    type: String,
    required: true, // Hace que el campo sea requerido
  },
  // Otros campos de usuario...
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
