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

  const DatosPorFecha = async (req, res) => {
    try {
        const fecha = req.params.fecha; // Debes pasar la fecha en el formato adecuado, por ejemplo, '2023-11-13'
        
        // Consultar en todos los modelos y combinar los resultados
        const datosProteccion = await ProteccionModel.find({ fecha });
        const datosPeligros = await PeligrosModel.find({ fecha });
        const datosRiesgos = await RiesgosModel.find({ fecha });
        const datosMedidas = await MedidasModel.find({ fecha });

        // Combina los resultados de todos los modelos en un solo objeto
        const resultados = {
            proteccion: datosProteccion,
            peligros: datosPeligros,
            riesgos: datosRiesgos,
            medidas: datosMedidas,
        };

        res.status(200).json(resultados);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


module.exports = {obtenerDatosProteccion, obtenerDatosPeligros, obtenerDatosRiesgos, obtenerDatosMedidas, DatosPorFecha}