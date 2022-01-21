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