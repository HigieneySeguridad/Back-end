const mongoose = require('mongoose');

const checkboxSchema = new mongoose.Schema({
    checkboxes: {
        checkbox1: String,
        checkbox2: String,
        checkbox3: String,
        checkbox4: String,
        checkbox5: String,
        checkbox6: String,
        checkbox7: String,
        checkbox8: String,
        checkbox9: String,
        checkbox10: String,
        checkbox11: String,
        checkbox12: String,
        checkbox13: String,
        checkbox14: String,
        checkbox15: String,
        checkbox16: String,
        checkbox17: String,
        checkbox18: String,
        checkbox19: String,
        checkbox20: String,
        checkbox21: String,
        checkbox22: String,
        checkbox23: String,
        checkbox24: String,
        checkbox25: String,
        checkbox26: String,
        checkbox27: String,
        checkbox28: String,
        checkbox29: String,
        checkbox30: String,
        checkbox31: String,
        checkbox32: String,
        checkbox33: String,
        checkbox34: String,
        checkbox35: String,
        checkbox36: String,
        checkbox37: String,
        checkbox38: String,
        checkbox39: String,
        checkbox40: String,
        checkbox41: String,
    },
    comentario: String,
    date: Date,
  });

const ProteccionModel = mongoose.model("Protecciones", checkboxSchema);
const PeligrosModel = mongoose.model("Peligros", checkboxSchema);
const RiegosModel = mongoose.model("Riesgos", checkboxSchema);
const MedidasModel = mongoose.model("Medidas", checkboxSchema);


module.exports = { ProteccionModel, PeligrosModel, RiegosModel, MedidasModel }