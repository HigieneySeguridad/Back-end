const mongoose = require('mongoose');

const checkboxSchema = new mongoose.Schema({
    proteccion: {
        type: Object,
        of: String,
        required: true,
    },
    peligros: {
        type: Object,
        of: String,
        required: true,
    },
    riesgos: {
        type: Object,
        of: String,
        required: true,
    },
    medidas: {
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
    estado: {
        type: String
    },
    username: {
        type: String
    }
});

const formularioModel = mongoose.model("formularios", checkboxSchema);

module.exports = formularioModel;
