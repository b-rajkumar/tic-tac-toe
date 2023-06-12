const { describe, it, beforeEach } = require('node:test');
const { deepStrictEqual } = require('assert');
const { TicTacToe } = require('../src/tic-tac-toe');
const { Player, Players } = require('../src/player');

describe('tic-tac-toe', () => {
  let player1;
  let player2;
  let players;
  let game;

  beforeEach(() => {
    player1 = new Player('rishabh', 'X');
    player2 = new Player('debu', 'O');
    players = new Players(player1, player2);
    game = new TicTacToe(players);
  });

  describe('makeMove', () => {
    it('should make the move for the current player', () => {
      game.makeMove(1);

      deepStrictEqual(player1.moves, [1]);
      deepStrictEqual(player2.moves, []);
    });

    it('should make the move for the current player and switch the player for the next move', () => {
      game.makeMove(1);
      game.makeMove(2);

      deepStrictEqual(player1.moves, [1]);
      deepStrictEqual(player2.moves, [2]);
    });

    it('should not add make move if the entered move already exists', () => {
      game.makeMove(1);
      game.makeMove(2);
      game.makeMove(2);

      deepStrictEqual(player1.moves, [1]);
      deepStrictEqual(player2.moves, [2]);
    });
  });

  describe('gameStatus', () => {
    it('should return the status of the game when it started', () => {
      const expected = {
        currentPlayer: 'rishabh',
        moves: {},
        isGameOver: false,
        winner: undefined
      };
      const actual = game.gameStatus();

      deepStrictEqual(actual, expected);
    });

    it('should return the status of the game, when the game is over', () => {
      const expected = {
        currentPlayer: 'debu',
        moves: {
          '0': 'X', '4': 'O', '1': 'X', '5': 'O', '2': 'X'
        },
        isGameOver: true,
        winner: 'rishabh'
      };

      game.makeMove(0);
      game.makeMove(4);
      game.makeMove(1);
      game.makeMove(5);
      game.makeMove(2);

      const actual = game.gameStatus();

      deepStrictEqual(actual, expected);
    });
  });
});