const mongoose = require('mongoose');

const notificacionSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Usuario',
    },
    idForm: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'formularios'
    },
    mensaje: {
        type: String,
        required: true,
    },
    permisoTrabajo: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        default: 'Pendiente'
    },
    tipo: {
        type: String,
        required: true
    }
}, {versionKey: false, timestamps: true});

const Notificacion = mongoose.model('Notificaciones', notificacionSchema);

module.exports = Notificacion;
