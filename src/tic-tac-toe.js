const { table } = require("table");

class TicTacToe {
  #players
  #board
  #player
  #hasWon
  #renderer
  #currentPlayerPos

  constructor(players, board, hasWon, renderer) {
    this.#board = board;
    this.#hasWon = hasWon;
    this.#players = players
    this.#renderer = renderer;
    this.#currentPlayerPos = 0;
    this.#player = players[this.#currentPlayerPos];
  }

  #switchPlayer() {
    this.#currentPlayerPos = (this.#currentPlayerPos + 1) % 2;
    this.#player = this.#players[this.#currentPlayerPos];
  }

  run() {
    process.stdout.write(`${this.#player.name} enter the position: \n`);

    process.stdin.once('data', (key) => {
      const status = this.#board.update(this.#player.symbol, key);

      if(status) {
        this.#renderer(this.#board);
        this.#hasWon(this.#player, this.#board);
        this.#switchPlayer();
        this.run(this.#player, this.#board);
      } else {
        this.run(this.#player, this.#board);
      }

    });
  }
}

const renderer = (board) => {
  console.log(table(board.getElements()));
};

const hasWon = (player, board) => {
};

exports.TicTacToe = TicTacToe;
exports.renderer = renderer;
exports.hasWon = hasWon;