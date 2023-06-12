const EventEmitter = require("events");

class keyboardController extends EventEmitter {
  #keyMapping
  constructor(keyMapping) {
    super();
    this.#keyMapping = keyMapping;
  }

  start() {
    const stdin = process.stdin;
    stdin.setEncoding("utf-8");
    stdin.setRawMode(true);

    stdin.on('data', (move) => {
      if(move === '\u0003') {
        stdin.setRawMode(false);
      }

      if(move in this.#keyMapping) {
        this.emit('move-entered', this.#keyMapping[move]);
      } else {
        this.emit('invalid-move', move);
      }
    });
  }

  end() {
    process.stdin.destroy();
  }
};

exports.keyboardController = keyboardController;