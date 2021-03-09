// Importar el modulo express
var express = require('express');

// Declar el router par las rutas
var router = express.Router();
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
    res.send('Obtener todos los  usuarios');
    res.end();
});
// Obtener playlist y sus canciones
router.get('/:idUsuario/playlists', function(req, res) {
        res.send(`Obtener las playlists del usuario   ${req.params.idUsuario}`);
        res.end();
    })
    // Obtener playlist y sus canciones 
router.get('/:idUsuario/playlist/:idPlaylist', function(req, res) {
        res.send(`Obtener la playlist ${req.params.idPlaylist} del usuario ${req.params.idUsuario}`);
        res.end();
    })
    // Guardar cancion en playlist
router.post('/:idUsuario/playlist/:idPlaylist/canciones', function(req, res) {
    res.send(`La cancion se guardado en el playlist ${req.params.idPlaylist} del usuario ${req.params.idUsuario}`);
    res.end();
});

// crear una nueva playlist
router.post('/:idUsuario/playlist', function(req, res) {
    res.send(`Se guardo la playlist en el usuario ${req.params.idUsuario}`);
    res.end();
})
module.exports = router;