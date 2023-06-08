class TicTacToe {
  #io
  #turn
  #onEnd
  #board
  #player
  #players
  #renderer
  #isGameOver
  #playerNumber

  constructor({ players, board, io, isGameOver, renderer, onEnd }) {
    this.#turn = 0;
    this.#playerNumber = 0;
    this.#io = io;
    this.#onEnd = onEnd;
    this.#board = board;
    this.#players = players;
    this.#renderer = renderer;
    this.#isGameOver = isGameOver;
  }

  run() {
    this.#player = this.#players[this.#playerNumber];
    this.#io.write(`\n${this.#player.name} enter position: `);
    this.#io.read((key) => this.#gameLoop(key));
  }

  #gameLoop(position) {
    const status = this.#board.update(this.#player.symbol, position - 1);

    if(status) {
      this.#renderer(this.#board.getElements());
      this.#playerNumber = (++this.#turn) % 2;

      this.#hasWon(this.#player)
      this.#isDraw();
    }

    this.run();
  }

  #hasWon(player) {
    const positions = this.#board.getPositions(this.#player.symbol);
    if(this.#isGameOver(positions)) {
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