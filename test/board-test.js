const { describe, it } = require('node:test');
const { deepStrictEqual, ok } = require('assert');
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

  describe('isGameOver', () => {
    it('should return true when row have same symbol', () => {
      const board = new Board();
      board.update("X", 0);
      board.update("X", 1);
      board.update("X", 2);

      ok(board.isGameOver("X"));
    });

    it('should return true when column have same symbol', () => {
      const board = new Board();
      board.update("X", 0);
      board.update("X", 3);
      board.update("X", 6);

      ok(board.isGameOver("X"));
    });

    it('should return true when diagonal have same symbol', () => {
      const board = new Board();
      board.update("X", 0);
      board.update("X", 4);
      board.update("X", 8);

      ok(board.isGameOver("X"));
    });

    it('should return false when the board has no winning combination', () => {
      const board = new Board();
      board.update("X", 0);
      board.update("X", 3);
      board.update("X", 8);

      ok(!board.isGameOver("X"));
    });
  });
});