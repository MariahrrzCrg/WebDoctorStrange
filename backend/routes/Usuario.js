const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Usuario = require('../models/Usuario');
const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {
    const Usuario = await Usuario.find().sort('-_id');
    res.json(Usuario);
});

router.post('/', async (req, res) => {
    const { Nombre, Apellido,Email,FecNac,Nacionaliad,Sexo } = req.body;
    const newUsuario = new Usuario({Nombre, Apellido,Email,FecNac,Sexo,Nacionaliad});
    console.log(newUsuario)
    await newUsuario.save();
    res.json({'message': 'Usuario Saved'});
});

router.delete('/:id', async (req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    res.json({message: 'Usuario Deleted'});
});


module.exports = router;