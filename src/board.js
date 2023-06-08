class Board {
  #board

  constructor() {
    this.#board = new Array(9).fill(' ');
  };

  #isValidPos(position) {
    const isPosValid = position > 0 && position < 10;
    const isPosVacant = this.#board[position] === ' ';

    return isPosVacant && isPosValid;
  }

  update(symbol, position) {
    if(this.#isValidPos(position)) {
      this.#board[position] = symbol;
      return true;
    }

    return false;
  }

  getPositionsOf(symbol) {
    return this.#board.filter((element) => element === symbol);
  }

  getElements() {
    return this.#board.slice();
  };
}

exports.Board = Board;