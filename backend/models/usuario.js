// Esquema de usuario 
var moongose = require('mongoose');
var esquema = new moongose.Schema({
    nombreUsuario: String,
    playlists: Array
});

module.exports = moongose.model('usuarios', esquema);