class Board {
  #board

  constructor(dimensions) {
    this.#board = this.#createBoard(dimensions);
  };

  #createBoard(dimensions) {
    const { rows, columns } = dimensions;
    return new Array(rows).fill().map(() => {
      return new Array(columns).fill(' ');
    });
  };

  #isPosVacant(row, column) {
    return this.#board[row][column] === ' ';
  }

  #getCoordinate(position) {
    const row = Math.floor((position - 1) / 3);
    const column = (position + 2) % 3;

    return { row, column };
  }

  #isValidMove(position, row, column) {
    const isPosValid = position > 0 && position < 10;
    if(!isPosValid) return false;

    return this.#isPosVacant(row, column);
  }

  update(symbol, position) {
    const { row, column } = this.#getCoordinate(position);

    if(this.#isValidMove(position, row, column)) {
      this.#board[row][column] = symbol;

      return true;
    }

    return false;
  }

  getElements() {
    return JSON.parse(JSON.stringify(this.#board));
  };
}

exports.Board = Board;