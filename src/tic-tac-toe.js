class TicTacToe {
  #read
  #turn
  #onEnd
  #board
  #players
  #renderer

  constructor({ participants, board, read, renderer, onEnd }) {
    this.#turn = 0;
    this.#read = read;
    this.#onEnd = onEnd;
    this.#board = board;
    this.#players = participants;
    this.#renderer = renderer;
  }

  run() {
    const player = this.#players.getPlayer();
    this.#renderer.display(this.#board.getElements());
    this.#renderer.write(`${player.name} enter position: `);
    this.#read((key) => this.#gameLoop(key));
  }

  #gameLoop(position) {
    const player = this.#players.getPlayer();
    const status = this.#board.update(player.symbol, position - 1);

    if(status) {
      this.#hasWon(player);
      player.addMove(position);
      this.#players.switch();
      this.#turn += 1;
      this.#isDraw();
    }

    this.run();
  }

  #hasWon(player) {
    if(this.#board.isGameOver(player.symbol)) {
      this.#renderer.write(`${player.name} WON !!!`);
      this.#onEnd();
    }
  }

  #isDraw() {
    if(this.#turn === 9) {
      this.#renderer.write(`DRAW !`);
      this.#onEnd();
    }
  }
};

const read = (onData) => {
  process.stdin.once('data', onData);
};

exports.read = read;
exports.TicTacToe = TicTacToe;