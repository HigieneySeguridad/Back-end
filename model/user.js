const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true, 
  },
  role: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true,
  },
   date: {
    type: Date
   },
   dni: {
    type: Number
   },
   telefono: {
    type: Number
   }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
