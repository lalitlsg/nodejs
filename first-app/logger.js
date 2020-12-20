const EventEmitter = require("events");

class Logger extends EventEmitter {
  showName(name) {
    console.log(`The name is ${name}`);
    this.emit("messageLogged", { id: 1, name: "Lalit" });
  }
}

module.exports = Logger;
