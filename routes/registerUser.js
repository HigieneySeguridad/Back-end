const express = require("express");
const { consultarUsuarios, registrarUsuarios, eliminarUsuarios } = require("../controllers/registerController");
const Router = express.Router();


Router.get('/', consultarUsuarios)
  

Router.post('/', registrarUsuarios)


Router.delete('/:id', eliminarUsuarios);



module.exports = Router;