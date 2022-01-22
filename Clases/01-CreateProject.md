<!-- New application with NodeJS & Socket.io -->

## Clase 1:
### Descripcion de APP:

- Sala de Chat para interactuar con varios clientes en tiempo real

- Disponible para móvil y ordenador

### Pasos para crear una app con NodeJS & Socket.io:

- Creamos package.json:
```
{
  "name": "chat-app",
  "version": "1.0.0",
  "description": "Chat app with NodeJS & Socket.io",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Juan Diego Gómez",
  "license": "MIT"
}
```

- Creacion de carpetas Client & Server

# Clase 2:
### Instalar dependencias:

- Instalamos Express:
```
npm install express --save
```

- Instalamos Socket.io:
```
npm install socket.io --save
```

- Instalamos Nodemon:
```
npm install nodemon --save-dev
```

- modificamos package.json:
```
"scripts": {
  "start": "nodemon server/index.js"
}
```	

# Clase 3:
### Cargar Librerías:

- Importamos Express:
```
const express = require('express');
```

- Llamamos a express:
```
const app = express();
```

- Cargamos el server Http con la librería de Node y en el metodo server pasamos la app de express
```
const server = require('http').Server(app);
```

- Le pasamos a Socket.io la instancia del server:
```
const io = require('socket.io')(server);
```

# Clase 4:
### Conexión al Socket:

- Conectamos con el cliente mediante el método connect:
```
io.on('connection', (socket) => {
  console.log('Cliente conectado');
});
```

- En vez de ver por consola la conexión ejecutamos una revision de IP:
```
io.on('connection', (socket) => {
  socket.handshake.address;
});
```

- Antes de ejecutarlo usamos una vista para que todos los HTML de client seran estaticos y los cargue de la carpeta client.

- En la carpeta client hemos creado index y main.js que serán nuestros archivos de entrada.

- creamos la carpeta socket.io con archivo socket.io.js

# Clase 5:
### Mensajes en el chat:

- en el archivo main.js: para explicarle cual sera nuestro servidor:
```
const socket = io.connect('http://192.168.1.163:8080',{forceNew: true});
```

- Despues hacemos un socket.on para escuchar el evento 'message' que es el que nos enviara el mensaje del cliente:
```
socket.on('message', (data) => {
  console.log(data);
});
```

- finalmente la function render que contendra el mensaje al cliente.

- En el archivo index.js agregamos el mensaje al cliente:
```
var messages = [{
    id: 1,
    text: 'Bienvenido al chat de Juan Diego Gómez con NodeJS y socket.io',
    nickname: 'Bot'
}];
```

# Clase 6:
### Gestionamiento de mensajes:

- Estilo básico
- Formularios
- Código para devolver mensajes

