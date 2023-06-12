class Player {
  #name
  #moves
  #symbol
  constructor(name, symbol) {
    this.#name = name;
    this.#moves = [];
    this.#symbol = symbol;
  }

  registerMove(move) {
    this.#moves.push(move);
  }

  get moves() {
    return [...this.#moves];
  }

  get name() {
    return this.#name;
  }

  get symbol() {
    return this.#symbol;
  }
};

class Players {
  #players
  #numberOfMoves
  #winningCombinations
  constructor(player1, player2) {
    this.#players = [player1, player2];
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
    this.#numberOfMoves = 0;
  }

  switch() {
    this.#players.reverse();
  }

  makeMove(move) {
    this.#players[0].registerMove(move);
    this.#numberOfMoves += 1;
  }

  getCurrentPlayerName() {
    return this.#players[0].name;
  }

  isDrawn() {
    return this.#numberOfMoves === 9;
  }

  hasWon() {
    const currentPlayerMoves = this.#players[0].moves;

    return this.#winningCombinations.some(combination => {
      return combination.every(move => currentPlayerMoves.includes(move));
    });
  }

  getMoves() {
    return Object.fromEntries(
      this.#players.map((player) => {
        return player.moves.map(move => [move, player.symbol]);
      }).flat()
    );
  }
}
exports.Player = Player;
exports.Players = Players;