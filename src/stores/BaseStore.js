var EventEmitter = require('events').EventEmitter;

export default class BaseStore extends EventEmitter {
  emitChange(value) {
    this.emit('changed', value);
  }

  addChangeListener(callback) {
    return this.on('changed', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('changed', callback);
  }
}
