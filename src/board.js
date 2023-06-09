class Board {
  #board
  #winningCombinations

  constructor() {
    this.#board = new Array(9).fill(' ');
    this.#winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
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

  #getPositions(symbol) {
    return this.#board.reduce((positions, element, index) => {
      if(element === symbol) positions.push(index);

      return positions;
    }, []);
  }

  getElements() {
    return this.#board.slice();
  }

  isGameOver(symbol) {
    const positions = this.#getPositions(symbol);
    return this.#winningCombinations.some((combination) => {
      return combination.every((element) => positions.includes(element));
    });
  }
};

exports.Board = Board;