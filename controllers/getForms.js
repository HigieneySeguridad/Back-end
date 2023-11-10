const { ProteccionModel, PeligrosModel, RiesgosModel, MedidasModel } = require("../model/form");

const obtenerDatosProteccion = async (req, res) => {
    try {
      // Realizar la búsqueda en la base de datos (puedes personalizar la consulta según tus necesidades)
      const resultados = await ProteccionModel.find();
  
      // Enviar los resultados como respuesta
      res.status(200).json(resultados);
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la búsqueda
      res.status(500).json({ error: 'Error al obtener los datos de protección.' });
    }
  };

const obtenerDatosPeligros = async (req, res) => {
    try {
      // Realizar la búsqueda en la base de datos (puedes personalizar la consulta según tus necesidades)
      const resultados = await PeligrosModel.find();
  
      // Enviar los resultados como respuesta
      res.status(200).json(resultados);
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la búsqueda
      res.status(500).json({ error: 'Error al obtener los datos de peligros.' });
    }
  };

  const obtenerDatosRiesgos = async (req, res) => {
    try {
      // Realizar la búsqueda en la base de datos (puedes personalizar la consulta según tus necesidades)
      const resultados = await RiesgosModel.find();
  
      // Enviar los resultados como respuesta
      res.status(200).json(resultados);
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la búsqueda
      res.status(500).json({ error: 'Error al obtener los datos de riesgos.' });
    }
  };

  const obtenerDatosMedidas = async (req, res) => {
    try {
      // Realizar la búsqueda en la base de datos (puedes personalizar la consulta según tus necesidades)
      const resultados = await MedidasModel.find();
  
      // Enviar los resultados como respuesta
      res.status(200).json(resultados);
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la búsqueda
      res.status(500).json({ error: 'Error al obtener los datos de medidas.' });
    }
  };


module.exports = {obtenerDatosProteccion, obtenerDatosPeligros, obtenerDatosRiesgos, obtenerDatosMedidas}