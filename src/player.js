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

class Participants {
  #players
  #playerId
  constructor(players) {
    this.#players = players;
    this.#playerId = 0;
  }

  switch() {
    this.#playerId = this.#playerId ? 0 : 1;
  }

  getPlayer() {
    return this.#players[this.#playerId];
  }
};

exports.Player = Player;
exports.Participants = Participants;