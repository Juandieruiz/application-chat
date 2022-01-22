const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// defnimos la vista que se va a usar
app.use(express.static('client'));

// Creamos una ruta con el método get 
app.get('/app', function(req, res){
    res.status(200).send('Hola mundo desde una ruta');
});

// Configuramos un mensaje de Bienvenida
var messages = [{
    id: 1,
    text: 'Bienvenido al chat de Juan Diego Gómez con NodeJS y socket.io',
    nickname: 'Bot'
}];

// Conexión con el cliente(SOCKET) 
io.sockets.on('connection', function(socket) {
    console.log("Conectado con la IP"+socket.handshake.address); // 
    // Enviamos el mensaje de bienvenida
    socket.emit('messages', messages);

    socket.on('add-message',(data) => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

// le pasamos el puerto que vamos a usar y un callback
server.listen(3500, () => {
    console.log('Servidor ejecutandose en el puerto 3500');
});
