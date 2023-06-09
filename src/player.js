class Player {
  #name
  #moves
  #symbol
  constructor(name, symbol) {
    this.#name = name;
    this.#moves = [];
    this.#symbol = symbol;
  }

  addMove(move) {
    this.#moves.push(move);
  }

  get moves() {
    return this.#moves.slice();
  }

  get name() {
    return this.#name;
  }

  get symbol() {
    return this.#symbol;
  }
};

exports.Player = Player;