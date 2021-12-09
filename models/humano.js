let mongoose = require('mongoose');

// requiero un squema, se crea una entidad que tiene el id, nombre 
let Schema = mongoose.Schema;

let humanoSchema = new Schema({
    id: { type: String },
    nombres: { type: String },
    apellidos: { type: String },
    edad: { type: Number, min: 0 }
}, { versionKey: false });//--> es importante porque si no le crea un atributo --v a l modelo 

// este es para decirle que  la base de datos se llama personas y se hace en plurar  en
// mongouse
let Humano = mongoose.model('Humanos', humanoSchema);

module.exports = Humano;