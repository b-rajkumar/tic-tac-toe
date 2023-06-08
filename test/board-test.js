const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Board } = require('../src/board');

describe('board', () => {
  describe('getElements', () => {
    it('should return an empty Board of size 3 x 3', () => {
      const board = new Board();

      const expected = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });
  });

  describe('update', () => {
    it('should place an element in a given position', () => {
      const board = new Board();

      board.update('X', 2);

      const expected = [' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' '];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should not place anything outside the Board', () => {
      const board = new Board();

      const expected = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should place given symbols at respective positions', () => {
      const board = new Board();

      board.update('X', 1);

      board.update('X', 8);

      board.update('O', 3);

      const expected = [' ', 'X', ' ', 'O', ' ', ' ', ' ', ' ', 'X'];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });

    it('should not place a symbol on the filled position on the board', () => {
      const board = new Board();

      board.update('X', 1);
      board.update('X', 8);
      board.update('O', 1);

      const expected = [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', 'X'];
      const actual = board.getElements();

      deepStrictEqual(actual, expected);
    });
  });

  describe('getPositions', () => {
    it('should filter all the positions of given symbol', () => {
      const board = new Board();

      board.update('X', 1);
      board.update('X', 8);
      board.update('O', 1);

      const positions = board.getPositions("X");

      deepStrictEqual(positions, [1, 8]);
    });

  });
});