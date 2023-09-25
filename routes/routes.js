
const Usuario = require("./model/modelUser")

const userRoutes = async => {


app.get('/registrar', async (req, res) => {
        try {
          const usuarios = await Usuario.find({});
          res.json(usuarios);
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
          res.status(500).send('Error al obtener usuarios.');
        }
      });

}


app.post('/registrar', async (req, res) => {
    const { user, password } = req.body;
    const nuevoUsuario = new Usuario({user, password});
  
  try {
    await nuevoUsuario.save();
    console.log("Usuario registrado con exito");
    res.status(200).json({mensaje: "usuario registrado con exito"});
  } catch(err){
     console.error("error al registrar el usuario", err.message);
     res.status(500).send("error al registrar usuario");
  }
  });



module.exports = userRoutes;