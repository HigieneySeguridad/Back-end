// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const Notificaciones = () => {
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');
      
        // Manejar eventos específicos, como la solicitud de amistad
        socket.on('solicitud_amistad', (data) => {
          // Enviar la solicitud al usuario destinatario
          io.to(data.idUsuarioDestino).emit('nueva_solicitud_amistad', {
            remitente: data.idUsuarioRemitente,
            mensaje: 'Te ha enviado una solicitud de amistad. ¿Aceptas?',
          });
        });
      
        // Manejar la respuesta del usuario destinatario
        socket.on('respuesta_amistad', (data) => {
          // Enviar la respuesta al usuario remitente
          io.to(data.idUsuarioRemitente).emit('respuesta_solicitud_amistad', {
            destinatario: data.idUsuarioDestino,
            aceptada: data.aceptada,
          });
        });
      
        // Manejar la desconexión del cliente
        socket.on('disconnect', () => {
          console.log('Cliente desconectado');
        });
      });
      
      // Iniciar el servidor en el puerto 3001
      server.listen(3001, () => {
        console.log('Notificaciones en el puerto 3001');
      });
      
}


module.exports = Notificaciones;