import jwt from ('jsonwebtoken');
const express = require("express")
const Router = express.Router()
const Usuario = require("../model/user")

const secretKey = process.env.SECRET_KEY; 

Router.post('/', (req, res) => {
  const {user} = req.body;
  const token = jwt.sign({ user }, secretKey);

  res.json({ token });
});

Router.get('/protegido', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }

    res.json({ message: 'Ruta protegida, usuario: ' + decoded.Usuario.user });
  });
});

module.exports = Router;
