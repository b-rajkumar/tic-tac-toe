class Board {
  #board

  constructor() {
    this.#board = new Array(9).fill(' ');
  }

  #isValidPos(position) {
    const isPosValid = position >= 0 && position < 9;
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

  getPositions(symbol) {
    return this.#board.reduce((positions, element, index) => {
      if(element === symbol) positions.push(index);

      return positions;
    }, []);
  }

  getElements() {
    return this.#board.slice();
  }
};

exports.Board = Board;