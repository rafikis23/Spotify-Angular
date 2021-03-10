/*
Artistas
Obtener listado de artistas
Obtener albumes y canciones
*/

// Importar el modulo de express
var express = require('express');

// Declarar el router para las rutas
var router = express.Router();

// Declarar el modelo de artistas
var artista = require('../models/artista');
// Declarar moongose 
var mongoose = require('mongoose');
// Obtener todos los artistas
router.get('/', function(req, res) {
    artista.find({}, { _id: true, nombreArtista: true })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end(error);
        })
});
// Obtener albumes y canciones
router.get('/:idArtista/albumes', function(req, res) {
    artista.find({
            _id: mongoose.Types.ObjectId(req.params.idArtista)
        }, {
            "albumes": true
        })
        .then(resultado => {
            res.send(resultado[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
});

module.exports = router;