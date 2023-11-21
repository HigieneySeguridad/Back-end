const formularioModel = require("../model/form");

const obtenerFormularios = async (req, res) => {
  try {
    const datos = await formularioModel.find();
    res.status(200).json(datos);
  } catch (error) {
    console.error('Error al obtener todos los datos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const guardarFormulario = async (req, res) => {
  try {
    const { proteccion, peligros, riesgos, medidas, fecha, comentario, estado, username } = req.body;

    const nuevoForm = new formularioModel({
      proteccion,
      peligros,
      riesgos,
      medidas,
      fecha,  // asegúrate de que fecha esté en el cuerpo de la solicitud
      comentario,
      estado,
      username
    });

    await nuevoForm.save();  // Debes guardar el nuevo formulario en la base de datos
    console.log('Datos almacenados con éxito en la base de datos:', nuevoForm);
    res.status(200).send('Datos almacenados con éxito en la base de datos.');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).json(error);
  }
};

const formulariosPorFecha = async (req, res) => {
  try {
    const fecha = req.params.fecha; 
    const datos = await formularioModel.find({ fecha });

    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const editarEstado = async (req, res) => {
  try {
    const formId = req.params.id; 
    const { estado } = req.body;
    
    await formularioModel.findByIdAndUpdate(formId, { estado });

    res.status(200).json({ message: 'Estado actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el estado de los datos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { guardarFormulario, formulariosPorFecha, obtenerFormularios, editarEstado};
