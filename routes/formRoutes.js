const express = require("express");
const Router = express.Router();
const { guardarFormulario, formulariosPorID, obtenerFormularios, editarEstado} = require('../controllers/FormController');

Router.get('/', obtenerFormularios);
Router.get("/:id", formulariosPorID);
Router.post('/', guardarFormulario);
Router.put("/:id", editarEstado);



module.exports = Router;
