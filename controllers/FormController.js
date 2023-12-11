const formularioModel = require("../model/form");
const Notificacion = require("../model/notificaciones");

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
    const { header, empresa, area, permisoTrabajo, observaciones, yacimiento, textArea, tarea, pasos, proteccion, peligros, riesgos, medidas, fecha, comentario, estado, username, equipo } = req.body;

    const nuevoForm = new formularioModel({
      header,
      empresa,
      area,
      permisoTrabajo,
      yacimiento,
      tarea,
      pasos,
      textArea,
      proteccion,
      peligros,
      riesgos,
      medidas,
      fecha,  
      comentario,
      estado,
      username,
      observaciones,
      equipo
    });

    const newForm = await nuevoForm.save();

    equipo.forEach( async ( usuario )=>{
      Notificacion.create({
        mensaje: `Hola ${usuario.username}! ${newForm.username} te invito a unirte al equipo de trabajo en ${newForm.area}`,
        idForm: newForm._id,
        idUsuario: usuario.id,
        permisoTrabajo: newForm.permisoTrabajo,
        tipo: 'invitacion',
      });
    })
    
    console.log('Datos almacenados con éxito en la base de datos:', nuevoForm);
    res.status(200).send('Datos almacenados con éxito en la base de datos.');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).json(error);
  }
};

const formulariosPorID= async (req, res) => {
  try {
    const datos = await formularioModel.findById(req.params.id);

    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const editarEstado = async (req, res) => {
  try {
    const formId = req.params.id; 
    const { estado, motivo } = req.body;
    
    const formUpdated = await formularioModel.findByIdAndUpdate(formId, { estado, motivo });

    formUpdated.equipo.forEach( async ( usuario )=>{

      await Notificacion.create({
        mensaje: `Hola ${usuario.username}! Tu permiso de trabajo #${formUpdated.permisoTrabajo} ha sido ${estado}`,
        idForm: formId,
        idUsuario: usuario.id,
        permisoTrabajo: formUpdated.permisoTrabajo,
        tipo: 'solicitud',
        estado
    }) });
    
    const user = await Usuario.findOne({username:formUpdated.username})
    await Notificacion.create({
      mensaje: `Hola ${formUpdated.username}! Tu permiso de trabajo #${formUpdated.permisoTrabajo} ha sido ${estado}`,
      idForm: formId,
      idUsuario: user._id,
      permisoTrabajo: formUpdated.permisoTrabajo,
      tipo: 'solicitud',
      estado
  })

    res.status(200).json({ message: 'Estado actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el estado de los datos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { guardarFormulario, formulariosPorID, obtenerFormularios, editarEstado};
