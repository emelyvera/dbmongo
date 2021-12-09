// aqui nos conectarenmso a la base de datos 

let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://emelyvera:97100103650@dbhumanos.alerz.mongodb.net/dbHumanos?retryWrites=true&w=majority');

module.exports = mongoose;