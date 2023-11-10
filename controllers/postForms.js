const { ProteccionModel, PeligrosModel, RiesgosModel, MedidasModel } = require("../model/form");

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



const formPeligros = async (req, res) =>{
    try {
        const datosForm = req.body;
    
        const checkboxData = new PeligrosModel(datosForm);
    
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
    
        const checkboxData = new RiesgosModel(datosForm);
    
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
    
        const checkboxData = new MedidasModel(datosForm);
    
        await checkboxData.save();
    
        console.log("Datos almacenados con éxito en la base de datos.", datosForm);
        res.status(200).send("Datos almacenados con éxito en la base de datos.");
      } catch (error) {
        res.json(error)
        } 
}


module.exports = {formProteccion, formPeligros, formRiesgos, formMedidas}