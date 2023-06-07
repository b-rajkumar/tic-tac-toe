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

  update(symbol, position) {
    if(position > 0 && position < 10) {

      const row = Math.floor((position - 1) / 3);
      const column = (position + 2) % 3;

      if(this.#board[row][column] !== ' ') return false;

      this.#board[row][column] = symbol;
      return true;
    }

    return false;
  };

  getElements() {
    return JSON.parse(JSON.stringify(this.#board));
  };
}

exports.Board = Board;