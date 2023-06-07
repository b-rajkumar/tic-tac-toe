class Board {
  #dimensions
  #board
  constructor({ rows, columns }) {
    this.#dimensions = { rows, columns };
    this.#board = this.#createBoard();
  }

  #createBoard() {
    const { rows, columns } = this.#dimensions;
    return new Array(rows).fill().map(() => {
      return new Array(columns).fill(' ');
    });
  }

  place(element, { row, column }) {
    const { rows, columns } = this.#dimensions;
    if(rows > row && columns > column) {
      this.#board[row][column] = element;
    }
  }

  getElements() {
    return JSON.parse(JSON.stringify(this.#board));
  }

}

exports.Board = Board;