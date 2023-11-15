const express = require("express");
const Router = express.Router();
const {formProteccion, formPeligros, formRiesgos, formMedidas} = require('../controllers/postForms');
const {obtenerDatosProteccion, DatosPorFecha, obtenerDatosPeligros, obtenerDatosRiesgos, obtenerDatosMedidas} = require("../controllers/getForms")

Router.get("/proteccion", obtenerDatosProteccion);
Router.get("/peligros", obtenerDatosPeligros);
Router.get("/riesgos", obtenerDatosRiesgos);
Router.get("/medidas", obtenerDatosMedidas);
Router.get("/:fecha", DatosPorFecha);


Router.post("/proteccion", formProteccion);
Router.post("/peligros", formPeligros);
Router.post('/riesgos', formRiesgos);
Router.post('/medidas', formMedidas);


module.exports = Router;
