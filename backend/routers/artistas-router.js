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

// Obtener todos los artistas
router.get('/', function(req, res) {
    res.send('Obtener todos los  artistas');
    res.end();
});
// Obtener albumes y canciones
router.get('/:id/albumes', function(req, res) {
    res.send('Obtener los albumes del artista selecccionado' + ' ' + req.params.id);
    res.end();
});

module.exports = router;