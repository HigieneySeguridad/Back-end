const validarJWT = require('../middlewares/validarJWT');
const formularioModel = require('../model/form');
const Notificacion = require('../model/notificaciones');

const router = require('express').Router();


router.get('/', validarJWT, async (req, res) => {

    const misNotificaciones = await Notificacion.find({idUsuario: req.idUsuario});

    return res.json(misNotificaciones);
});

router.put('/aceptar/:id', validarJWT, async (req, res) => {
    const notificacion = await Notificacion.findByIdAndUpdate(req.params.id, {estado: 'aceptado'});

    const form = await formularioModel.findById(notificacion.idForm);

    form.equipo = form.equipo.map( usuario =>  usuario.id === req.idUsuario ? {...usuario, estado: 'Aceptado'} : usuario);

    await form.save()

    let formAcept = true;

    form.equipo.forEach( usuario => {
        if(usuario.estado !== 'Aceptado'){
            formAcept = false;
        } else formAcept = true;
    });

    if(formAcept){
        form.disponible = true;
        await form.save();
    };


    return res.json({    
        msg: 'Notificacion aceptada'
    })
})

router.put('/rechazar/:id', validarJWT, async (req, res) => {
    await Notificacion.findByIdAndUpdate(req.params.id, {estado: 'rechazado'});

    return res.json({    
        msg: 'Notificacion rechazada'
    })
})


module.exports = router;