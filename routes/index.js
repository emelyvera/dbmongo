var express = require('express');
var router = express.Router();

// requerimos tambien la conexion a la db y a a pernosa 
let mongoose=require('./../config/conexion');
let Humano=require('./../models/humano');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Daniela' });
// });
router.get('/', (req, res, next) => {
  Humano.find((err, humanos) => {
    //console.log(personas);
    if (err) throw err;
    res.render('index', { humanos: humanos });
  });
});

router.get('/humano/nuevo', (req, res, next) => {
  res.render('humanoForm', {});
});

router.get('/humano/modificar/:id', (req, res, next) => {
  let idHumano = req.params.id;  
  Humano.findOne({_id: idHumano }, (err, humano) => {
    //console.log(persona);
    if (err) throw err;
    res.render('humanoForm', { humano: humano });
  });
});

router.get('/humano/eliminar/:id', (req, res, next) => {
  let idHumano = req.params.id;

  Humano.remove({_id: idHumano }, (err) => {
    if (err) throw err;
    //o llamar nuevamente a find() y res.render();
    res.redirect('/');
  });
});

module.exports = router;
