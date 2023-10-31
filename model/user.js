const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    unique: true,
  },
  password: {
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
   date: Date,

});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
