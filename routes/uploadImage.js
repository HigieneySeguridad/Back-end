const multer = require('multer');
const express = require("express")
const Router = express.Router();
const mongoose = require("mongoose")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const Image = mongoose.model('Image', {
  filename: String,
  path: String,
  date: Date,
});

Router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { filename, path } = req.file;

    const image = new Image({
      filename,
      path,
      date: new Date(),
    });

    await image.save();

    res.status(200).json({ message: 'Imagen subida correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al subir imagen' });
  }
});

Router.get('/', async (req, res) => {
    try {
      const images = await Image.find({}, 'filename date -_id').sort({ date: -1 });
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: 'Error al traer las imágenes' });
    }
  });
  

module.exports = Router;
