const { ProteccionModel, PeligrosModel, RiegosModel, MedidasModel } = require("../model/form");

const formProteccion = async (req, res) =>{
    try {
        const datosForm = req.body;
    
        const checkboxData = new ProteccionModel(datosForm);

        await checkboxData.save();
    
        console.log('Datos almacenados: ', checkboxData);
        res.status(200).send("Datos almacenados con éxito en la base de datos.");
      } catch (error) {
        res.json(error)
        } 
}

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

const formPeligros = async (req, res) =>{
    try {
        const datosForm = req.body;
    
        const checkboxData = new PeligrosModel({datosForm});
    
        await checkboxData.save();
    
        console.log("Datos almacenados con éxito en la base de datos.", checkboxData);
        res.status(200).send("Datos almacenados con éxito en la base de datos.");
      } catch (error) {
        res.json(error)
        } 
}

const formRiesgos = async (req, res) => {
    try {
        const datosForm = req.body;
    
     
        const checkboxData = new RiegosModel({datosForm, date: new Date()});
    
       
        await checkboxData.save();
    
        console.log("Datos almacenados con éxito en la base de datos.", datosForm);
        res.status(200).send("Datos almacenados con éxito en la base de datos.");
      } catch (error) {
        res.json(error)
        } 
}

const formMedidas = async (req, res) =>{
    try {
        const datosForm = req.body;
    
        
        const checkboxData = new MedidasModel({datosForm, date: new Date()});
    
       
        await checkboxData.save();
    
        console.log("Datos almacenados con éxito en la base de datos.", datosForm);
        res.status(200).send("Datos almacenados con éxito en la base de datos.");
      } catch (error) {
        res.json(error)
        } 
}


module.exports = {formProteccion, obtenerDatosProteccion, formPeligros, formRiesgos, formMedidas}