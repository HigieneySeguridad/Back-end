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
    type: String
  },
  active: {
    type: Boolean,
    default: true,
  },
   date: {
    type: Date
   }

});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
