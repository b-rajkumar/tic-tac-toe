const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Board } = require('../src/board');

describe('board', () => {
  describe('getElements', () => {
    it('should return an empty board of size 3 x 3', () => {
      const board = new Board({ rows: 3, columns: 3 });

      const expected = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });
  });

  describe('place', () => {
    it('should place an element in a given position', () => {
      const board = new Board({ rows: 3, columns: 3 });
      const position = { row: 0, column: 2 };
      board.place('X', position);

      const expected = [
        [' ', ' ', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should not place anything outside the board', () => {
      const board = new Board({ rows: 3, columns: 3 });
      const location = { row: 2, column: 5 };
      board.place('X', location);

      const expected = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should place given symbols at respective positions', () => {
      const board = new Board({ rows: 3, columns: 3 });

      let position = { row: 2, column: 2 };
      board.place('X', position);

      position = { row: 0, column: 1 };
      board.place('X', position);

      position = { row: 1, column: 0 };
      board.place('O', position);

      const expected = [
        [' ', 'X', ' '],
        ['O', ' ', ' '],
        [' ', ' ', 'X']
      ];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });
  })
});