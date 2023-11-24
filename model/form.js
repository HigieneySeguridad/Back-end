const mongoose = require('mongoose');

const checkboxSchema = new mongoose.Schema({
    header: {
        type: Object,
        of: String,
        required: true
    },
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
    textArea: {
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
    },
    area: {
        type: String,
        required: true
    },
    permisoTrabajo: {
        type: Number,
        required: true
    },
    yacimiento: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    tarea: {
        type: String,
        required: true
    },
    pasos: {
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    }
});

const formularioModel = mongoose.model("formularios", checkboxSchema);

module.exports = formularioModel;
