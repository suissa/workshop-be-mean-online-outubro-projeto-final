var express = require('express');
var router = express.Router();
var Controller = require('./../../controllers/beers');

var callback = function(err, data, res){
  if (err){
    msg = 'Erro: ' + err;
    console.log('Erro: ', err);
  }
  else{
    msg = data;
    console.log('Cerveja Inserida: ', data);
  }
  res.json(msg);
};

router.get('/', function(req, res) {
  Controller.retrieve(req, res, callback);
});

// passando a variável :id para nossa rota
router.get('/:id', function(req, res) {
  Controller.show(req, res, callback);
});

// POST /api/beers
router.post('/', function(req, res) {
  Controller.create(req, res, callback);
});

// Altero a cerveja
router.put('/:id', function(req, res) {
  Controller.update(req, res, callback);
});

// Deleto a cerveja
router.delete('/:id', function(req, res) {
  Controller.delete(req, res, callback);
});


module.exports = router;
