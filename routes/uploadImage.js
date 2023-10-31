const multer = require('multer');
const express = require("express")
const Router = express.Router();
const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueFileName = `${uuidv4()}-${file.originalname}`;
    cb(null, Date.now() + '-' + uniqueFileName);
  },
});

const upload = multer({ storage: storage });

const Image = mongoose.model('Image', {
  filename: String,
  path: String,
  date: Date,
  _id: String,
});

Router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { filename, path } = req.file;
    const uniqueId = uuidv4(); 

    const image = new Image({
      filename,
      path,
      date: new Date(),
      _id: uniqueId,
    });
    console.log(image)
    await image.save();

    res.status(200).json({ message: 'Imagen subida correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al subir imagen' });
  }
});

Router.get('/', async (req, res) => {
    try {
      const images = await Image.find({}, 'filename date _id').sort({ date: -1 });
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: 'Error al traer las imágenes' });
    }
  });

Router.delete('/:id', async (req, res) => {
    try {  
      // Buscar la imagen por su _id y eliminarla
      const deletedImage = await Image.findByIdAndDelete(req.params.id);
  
      if (!deletedImage) {
        return res.status(404).json({ error: 'Imagen no encontrada' });
      }
  
      // Eliminar el archivo de la imagen del sistema de archivos (opcional)
      const fs = require('fs');
      fs.unlinkSync(deletedImage.path);
  
      res.status(200).json({ message: 'Imagen eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar imagen' });
    }
  });
  
  

module.exports = Router;
