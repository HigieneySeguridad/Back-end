const express = require("express");
const Router = express.Router();
const {guardarDatos, DatosPorFecha} = require('../controllers/FormController');

Router.get("/:fecha", DatosPorFecha);

Router.post('/', guardarDatos);


module.exports = Router;
