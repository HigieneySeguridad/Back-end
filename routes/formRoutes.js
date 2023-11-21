const express = require("express");
const Router = express.Router();
const { guardarFormulario, formulariosPorFecha, obtenerFormularios, editarEstado} = require('../controllers/FormController');

Router.get('/', obtenerFormularios);
Router.get("/:fecha", formulariosPorFecha);
Router.post('/', guardarFormulario);
Router.put("/:id", editarEstado);



module.exports = Router;
