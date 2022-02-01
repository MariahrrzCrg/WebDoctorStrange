const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
     email : { type: String, required: true },
     fecNac : { type: Date, default: Date.now },
    sexo : { type: String, required: true },
    nacionalidad : { type: String, required: true },
    tajetadeCredito : { type: String, required: true },
   
});

module.exports = model('Usuario', UsuarioSchema);