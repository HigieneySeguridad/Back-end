const { iniciarSesion, editarPerfil } = require("../controllers/loginController");
const express = require("express")
const Router = express.Router();


Router.post('/', iniciarSesion);

Router.put('/:id', editarPerfil);

module.exports = Router;