const express = require("express");
const { consultarUsuarios, registrarUsuarios, eliminarUsuarios, editarUsuarios } = require("../controllers/registerController");
const Router = express.Router();


Router.get('/', consultarUsuarios)
  

Router.post('/', registrarUsuarios)


Router.delete('/:id', eliminarUsuarios);


Router.put('/:id', editarUsuarios);



module.exports = Router;