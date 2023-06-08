const { describe, it } = require('node:test');
const { ok } = require('assert');
const { isGameOver } = require('../src/tic-tac-toe');

describe('isGameOver', () => {
  it('should return true when row have same symbol', () => {
    const board = [
      ['X', 'X', 'X'],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    const symbol = 'X';

    ok(isGameOver(symbol, board));
  });

  it('should return true when column have same symbol', () => {
    const board = [
      ['X', ' ', ' '],
      ['X', ' ', ' '],
      ['X', ' ', ' ']
    ];
    const symbol = 'X';

    ok(isGameOver(symbol, board));
  });

  it('should return true when diagonal have same symbol', () => {
    const board = [
      ['X', ' ', ' '],
      [' ', 'X', ' '],
      [' ', ' ', 'X']
    ];
    const symbol = 'X';

    ok(isGameOver(symbol, board));
  });
});