// Importar el modulo express
var express = require('express');

// Declarar el router par las rutas
var router = express.Router();

// Declarar el modelo de usuario
var usuario = require('../models/usuario');

// Modulo de moongose
var mongoose = require('mongoose');
/*
Usuarios
Obtener playlist y sus canciones
Obtener listado de las playlist
Obtener  usuarios
Guardar cancion en playlist
Crear un nuevo playlist
*/
//Obtener todos los usuarios
router.get('/', function(req, res) {
    usuario.find({}, { _id: true, nombreUsuario: true })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
});
// Obtener playlist y sus canciones
router.get('/:idUsuario/playlists/:idPlaylist', function(req, res) {
    usuario.find({
            _id: req.params.idUsuario,
            "playlists._id": mongoose.Types.ObjectId(req.params.idPlaylist)
        }, { "playlists.$": true })
        .then(resultado => {
            res.send(resultado[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
});
// Obtener playlist y sus canciones 
router.get('/:idUsuario/playlist', function(req, res) {
    usuario.find({
            _id: req.params.idUsuario
        }, {
            "playlists": true
        })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
});
// Guardar cancion en playlist
router.post('/:idUsuario/playlist/:idPlaylist/canciones', function(req, res) {
    usuario.update({
        _id: mongoose.Types.ObjectId(req.params.idUsuario),
        "playlists._id": mongoose.Types.ObjectId(req.params.idPlaylist)
    }, {
        $push: {
            "playlists.$.canciones": {
                nombreCancion: req.body.nombreCancion,
                artista: req.body.artista,
                album: req.body.album
            }
        }
    }).then(resultado => {
        res.send(resultado);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
});

// crear una nueva playlist
router.post('/:idUsuario/playlist', function(req, res) {
    usuario.update({
        _id: mongoose.Types.ObjectId(req.params.idUsuario)
    }, {
        $push: {
            playlists: {
                _id: mongoose.Types.ObjectId(),
                tituloPlaylist: req.body.tituloPlaylist,
                canciones: []
            }
        }
    }).then(resultado => {
        res.send(resultado);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
})
module.exports = router;