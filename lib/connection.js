var socket_io = require('socket.io');

function Connection(registry, socket) {
  this.id         = uuid.v4();
  this.registry   = registry;

  this.socket     = socket;
}

module.exports = Connection;