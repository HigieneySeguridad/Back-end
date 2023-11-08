const { ProteccionModel, PeligrosModel, RiegosModel, MedidasModel } = require("../model/form");

const formProteccion = async (req, res) =>{
    try {
        const datosForm = req.body;
    
        // Valida los datos según el esquema
        const date = new Date()
        const checkboxData = new ProteccionModel(datosForm, date);
       
        // Los datos son válidos, guárdalos en la base de datos
        await checkboxData.save();
    
        console.log('Datos almacenados: ', checkboxData);
        res.status(200).send("Datos almacenados con éxito en la base de datos.");
      } catch (error) {
        res.json(error)
        } 
}

const formPeligros = async (req, res) =>{
    try {
        const datosForm = req.body;
    
        // Valida los datos según el esquema
        const checkboxData = new PeligrosModel({datosForm});
    
        // Los datos son válidos, guárdalos en la base de datos
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
    
        // Valida los datos según el esquema
        const checkboxData = new RiegosModel({datosForm, date: new Date()});
    
        // Los datos son válidos, guárdalos en la base de datos
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
    
        // Valida los datos según el esquema
        const checkboxData = new MedidasModel({datosForm, date: new Date()});
    
        // Los datos son válidos, guárdalos en la base de datos
        await checkboxData.save();
    
        console.log("Datos almacenados con éxito en la base de datos.", datosForm);
        res.status(200).send("Datos almacenados con éxito en la base de datos.");
      } catch (error) {
        res.json(error)
        } 
}


module.exports = {formProteccion, formPeligros, formRiesgos, formMedidas}