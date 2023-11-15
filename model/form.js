const mongoose = require('mongoose');

const checkboxSchema = new mongoose.Schema({
    checkboxes: {
        type: Object,
        of: String,
        required: true,
    },
    comentario: {
        type: String,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
});

const ProteccionModel = mongoose.model("Protecciones", checkboxSchema);
const PeligrosModel = mongoose.model("Peligros", checkboxSchema);
const RiesgosModel = mongoose.model("Riesgos", checkboxSchema);
const MedidasModel = mongoose.model("Medidas", checkboxSchema);

module.exports = { ProteccionModel, PeligrosModel, RiesgosModel, MedidasModel }
