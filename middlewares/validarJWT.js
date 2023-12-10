const jwt = require('jsonwebtoken');
const Usuario = require('../model/user');

const validarJWT = async (req, res, next) => {

    const token = req.headers.token;

    if (!token) {
        return res.status(400).json({
            msg: 'No token received'
        })
    };

    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        
        const usuario = await Usuario.findById(id);

        if(!usuario){
            return res.status(401).json({
                msg: 'No estas autorizado para hacer esto'
            });
        }
      
       req.idUsuario = id;

       next();

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error de autenticacion'
        })
    }

}

module.exports = validarJWT;