const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Board } = require('../src/board');

describe('board', () => {
  describe('getElements', () => {
    it('should return an empty Board of size 3 x 3', () => {
      const board = new Board({ rows: 3, columns: 3 });

      const expected = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });
  });

  describe('update', () => {
    it('should place an element in a given position', () => {
      const board = new Board({ rows: 3, columns: 3 });

      board.update('X', 3);

      const expected = [' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' '];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should not place anything outside the Board', () => {
      const board = new Board({ rows: 3, columns: 3 });

      const expected = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should place given symbols at respective positions', () => {
      const board = new Board({ rows: 3, columns: 3 });

      board.update('X', 2);

      board.update('X', 9);

      board.update('O', 4);

      const expected = [' ', 'X', ' ', 'O', ' ', ' ', ' ', ' ', 'X'];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should not place a symbol on the filled position on the board', () => {
      const board = new Board({ rows: 3, columns: 3 });

      board.update('X', 2);

      board.update('X', 9);

      board.update('O', 2);

      const expected = [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', 'X'];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });
  })
});