const { ProteccionModel, PeligrosModel, RiesgosModel, MedidasModel } = require("../model/form");

const guardarDatos = async (req, res) => {
  try {
    const datosForm = req.body;

    // Crear un arreglo que contenga la fecha y los cuatro conjuntos de datos
    const datosCompletos = [
      { tipo: 'proteccion', checkboxData: new ProteccionModel(datosForm[0])},
      { tipo: 'peligros', checkboxData: new PeligrosModel(datosForm[1]) },
      { tipo: 'riesgos', checkboxData: new RiesgosModel(datosForm[2]) },
      { tipo: 'medidas', checkboxData: new MedidasModel(datosForm[3]) },
    ];


    // Guardar los datos en la base de datos
    await Promise.all(datosCompletos.map(async (item) => await item.checkboxData.save()));

    console.log('Datos almacenados con éxito en la base de datos:', datosCompletos);
    res.status(200).send('Datos almacenados con éxito en la base de datos.');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).json(error);
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

module.exports = {guardarDatos, DatosPorFecha}