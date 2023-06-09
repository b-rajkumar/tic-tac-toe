class TicTacToe {
  #io
  #turn
  #onEnd
  #board
  #players
  #renderer

  constructor({ participants, board, io, renderer, onEnd }) {
    this.#turn = 0;
    this.#io = io;
    this.#onEnd = onEnd;
    this.#board = board;
    this.#players = participants;
    this.#renderer = renderer;
  }

  run() {
    const player = this.#players.getPlayer();
    this.#io.write(`\n${player.name} enter position: `);
    this.#io.read((key) => this.#gameLoop(key));
  }

  #gameLoop(position) {
    const player = this.#players.getPlayer();
    const status = this.#board.update(player.symbol, position - 1);

    if(status) {
      this.#renderer(this.#board.getElements());
      this.#hasWon(player);
      player.addMove(position);
      console.log(player.moves);
      this.#players.switch();
      this.#turn += 1;
      this.#isDraw();
    }

    this.run();
  }

  #hasWon(player) {
    if(this.#board.isGameOver(player.symbol)) {
      this.#io.write(`${player.name} WON !!!`);
      this.#onEnd();
    }
  }

  #isDraw() {
    if(this.#turn === 9) {
      this.#io.write(`DRAW !`);
      this.#onEnd();
    }
  }
};

const read = (onData) => {
  process.stdin.once('data', onData);
};

exports.read = read;
exports.TicTacToe = TicTacToe;