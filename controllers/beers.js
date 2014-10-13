var Beer = require('../models/beer');

var _beer = {
  create: function(req, res, callback) {
    // recebendo os dados do POST
    var dados = req.body,
      model = new Beer(dados),
      msg = '';

    model.save(function (err, data) {
      callback(err, data, res);
    });

  },
  retrieve: function(req, res, callback) {
    Beer.find({}, function (err, data) {
      callback(err, data, res);
    });

  },
  show: function(req, res, callback) {
    var query = {_id: req.params.id};
    Beer.findOne(query, function (err, data) {
      callback(err, data, res);
    });

  },
  update: function(req, res, callback) {
    var query = {_id: req.params.id},
      mod = req.body,
      optional = {
        upsert: false,
        multi: true
      };

    Beer.update(query, mod, function (err, data) {
      callback(err, data, res);
    });

  },
  delete: function(req, res, callback) {
    var query = {_id: req.params.id};

    Beer.remove(query, function(err, data) {
      callback(err, data, res);
    });

  },
};

module.exports = _beer;

