class TicTacToe {
  #board
  #read
  #write
  #player
  #players
  #renderer
  #isGameOver
  #playerNumber

  constructor(players, board, io, isGameOver, renderer) {
    this.#board = board;
    this.#read = io.read;
    this.#write = io.write;
    this.#players = players;
    this.#renderer = renderer;
    this.#isGameOver = isGameOver;
    this.#playerNumber = 0;
  }

  run() {
    const symbol = this.#player.symbol;
    const board = this.#board.getElements();
    this.#player = this.#players[this.#playerNumber];
    this.#write(`${this.#player.name} enter position: `);
    this.#read((key) => this.#gameLoop(key));
    if(this.#isGameOver(symbol, board)) {
      this.#renderer(`${this.#player.name} WON !!`);
      process.exit();
    }
  }

  #gameLoop(position) {
    const status = this.#board.update(this.#player.symbol, position);

    if(status) {
      this.#renderer(this.#board.getElements());
      this.#playerNumber = (this.#playerNumber + 1) % 2;
    }

    this.run();
  }
};

const read = (onData) => {
  process.stdin.once('data', onData);
};

exports.read = read;
exports.TicTacToe = TicTacToe;