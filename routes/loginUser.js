const { iniciarSesion, rutaProtegida } = require("../controllers/loginController");
const express = require("express")
const Router = express.Router();


Router.post('/', iniciarSesion);
Router.post("/protegido", rutaProtegida)

module.exports = Router;