var socket_io = require('socket.io');

function Connection(registry, socket) {
  this.id         = socket.id;
  this.socket     = socket;
  this.registry   = registry;

}

module.exports = Connection;