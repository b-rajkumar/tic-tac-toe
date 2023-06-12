class TicTacToe {
  #players
  #winner
  #isGameOver

  constructor(players) {
    this.#players = players
    this.#isGameOver = false;
  }

  makeMove(move) {
    if(move.toString() in this.#players.getMoves()) return;

    this.#players.makeMove(move);

    if(this.#players.hasWon()) {
      this.#isGameOver = true;
      this.#winner = this.#players.getCurrentPlayerName();
    }

    if(this.#players.isDrawn()) {
      this.#isGameOver = true;
    }

    this.#players.switch();
  }

  gameStatus() {
    return {
      currentPlayer: this.#players.getCurrentPlayerName(),
      moves: this.#players.getMoves(),
      winner: this.#winner,
      isGameOver: this.#isGameOver
    }
  }

};

exports.TicTacToe = TicTacToe;