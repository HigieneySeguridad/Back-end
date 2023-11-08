const express = require("express")
const Router = express.Router();
const multer = require('multer');
const { consultarImagen, enviarImagen, Almacenamiento, eliminarImagen } = require('../controllers/imageController')
const upload = multer({ storage: Almacenamiento });


Router.get('/', consultarImagen);

Router.post('/', upload.single('image'), enviarImagen);

Router.delete('/:id', eliminarImagen);
  

module.exports = Router;
