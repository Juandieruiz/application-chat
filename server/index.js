const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Creamos una ruta con el método get 
app.get('/app', function(req, res){
    res.status(200).send('Hola mundo desde una ruta');
});


// le pasamos el puerto que vamos a usar y un callback
server.listen(8080, () => {
    console.log('Servidor ejecutandose en el puerto 8080');
});
