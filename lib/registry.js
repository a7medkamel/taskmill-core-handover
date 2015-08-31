
var socket_io   = require('socket.io')
  , _           = require('underscore')
  ;

function Registry(port, Type) {
  this.io = socket_io(port, { httpCompression : true });

  var me = this;
  this.io.on('connection', function(socket){
    socket.__obj = new Type(me, socket);
  });
}

Registry.prototype.findAll = function(query) {
  var ret = _.map(this.raw_connections(), function(i){
    return i.__obj;
  });

  if (query) {
    ret = _.filter(ret, query);
  }

  return ret;
};

Registry.prototype.raw_connections = function() {
  return this.io.of('/').connected;
};

module.exports = Registry;