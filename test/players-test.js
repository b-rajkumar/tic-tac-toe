const { describe, it, beforeEach } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Player, Players } = require('../src/player');

describe('Players', () => {
  let players;

  beforeEach(() => {
    const player1 = new Player('rishabh', 'X');
    const player2 = new Player('debu', 'O');

    players = new Players(player1, player2);
  })

  it('should give the first player', () => {
    const expected = 'rishabh';
    const actual = players.getCurrentPlayerName();

    deepStrictEqual(actual, expected);
  });

  it('should give the second player after switch', () => {
    players.switch();
    const expected = 'debu';
    const actual = players.getCurrentPlayerName();

    deepStrictEqual(actual, expected);
  });

  it('should give the first player after switching 2 times', () => {
    players.switch();
    players.switch();
    const expected = 'rishabh';
    const actual = players.getCurrentPlayerName();

    deepStrictEqual(actual, expected);
  });

  describe('getMoves', () => {
    it('should give the moves of the players at initial stage', () => {
      const expected = {};
      const actual = players.getMoves();

      deepStrictEqual(actual, expected);
    });

    it('should give all the moves of the players', () => {
      players.makeMove(1);
      players.switch();
      players.makeMove(2);
      players.switch();
      players.makeMove(3);
      players.switch();
      players.makeMove(7);
      players.switch();

      const expected = { '1': 'X', '3': 'X', '2': 'O', '7': 'O' };
      const actual = players.getMoves();

      deepStrictEqual(actual, expected);
    });
  });

  describe('isDrawn', () => {
    it('should give true if number of moves reaches 9', () => {
      for(let i = 0; i < 9; i++) {
        players.makeMove(i);
        players.switch();
      };

      const expected = true;
      const actual = players.isDrawn();

      deepStrictEqual(actual, expected);
    });

    it('should give false if the number of moves is less than 9', () => {
      players.makeMove(1);
      players.switch();

      const expected = false;
      const actual = players.isDrawn();

      deepStrictEqual(actual, expected);
    });
  });

  describe('hasWon', () => {
    it('should return false if the current player is not won', () => {
      players.makeMove(1);
      players.switch();
      const expected = false;
      const actual = players.hasWon();

      deepStrictEqual(actual, expected);
    });

    it('should return true if the current player won the game', () => {
      players.makeMove(0);
      players.makeMove(1);
      players.makeMove(2);

      const expected = true;
      const actual = players.hasWon();

      deepStrictEqual(actual, expected);
    });
  });
});