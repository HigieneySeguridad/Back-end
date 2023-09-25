const connectionDB = require('./database/connection');


async function consultarUsuarios() {
  try {
    const usuarios = await connectionDB.collection('Usuarios').find({}).toArray();
    return usuarios;
  } catch (error) {
    console.error('Error al consultar usuarios:', error.message);
    throw error;
  }
}


module.exports = {
  consultarUsuarios,

};