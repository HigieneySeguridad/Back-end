// server.js
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
      origin: '*',
  },
});

const Notificaciones = () => {
    io.on('connection', (socket) => {
      
      socket.on('notificacion', (data) => {
        socket.broadcast.emit('new_notificacion')
      });
    
      });
      
      // Iniciar el servidor en el puerto 3001
      server.listen(3001, () => {
        console.log('Notificaciones en el puerto 3001');
      });
      
}


module.exports = Notificaciones;