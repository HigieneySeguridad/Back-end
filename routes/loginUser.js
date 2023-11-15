const { iniciarSesion, editarPerfil } = require("../controllers/loginController");
const express = require("express")
const Router = express.Router();


Router.post('/', iniciarSesion);


module.exports = Router;