const express = require("express");
const Router = express.Router();
const {formProteccion, formPeligros, formRiesgos, formMedidas} = require('../controllers/formController');


Router.post("/proteccion", formProteccion);

Router.post("/peligros", formPeligros);

Router.post('/riegos', formRiesgos);

Router.post('/medidas', formMedidas);


module.exports = Router;
