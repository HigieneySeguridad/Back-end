import jwt from ('jsonwebtoken');

const secretKey = process.env.SECRET_KEY; 

app.post('/api/login', (req, res) => {

  const username = 'nombredeusuario';
  const token = jwt.sign({ username }, secretKey);

  res.json({ token });
});

app.get('/api/protegido', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }

    res.json({ message: 'Ruta protegida, usuario: ' + decoded.username });
  });
});

