import jwt from ('jsonwebtoken');

const secretKey = process.env.SECRET_KEY; // Reemplaza con una clave segura en un entorno de producción


// Ruta para autenticar al usuario y emitir un token JWT
app.post('/login', (req, res) => {
  // En un escenario real, verificarías las credenciales del usuario y autenticarías.

  // Para este ejemplo, simplemente emitiremos un token JWT con un payload que contiene el nombre de usuario.
  const username = 'nombredeusuario';
  const token = jwt.sign({ username }, secretKey);

  res.json({ token });
});

// Ruta protegida que requiere un token JWT para acceder
app.get('/protegido', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  // Verificar y decodificar el token JWT
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }

    res.json({ message: 'Ruta protegida, usuario: ' + decoded.username });
  });
});

