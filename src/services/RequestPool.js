export default class RequestPool {
  waiting = [];

  request(resolver, callback) {
    var waiting = this.waiting;

    waiting.push(callback);

    if (waiting.length === 1) {
      resolver(function () {
        while (waiting.length) {
          waiting.shift().apply(null, arguments);
        }
      });
    }

    return false;
  }
}
