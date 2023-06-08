const { describe, it } = require('node:test');
const { ok } = require('assert');
const { isGameOver } = require('../src/game-end');

describe('isGameOver', () => {
  it('should return true when row have same symbol', () => {
    const positions = [0, 1, 2];

    ok(isGameOver(positions));
  });

  it('should return true when column have same symbol', () => {
    const positions = [0, 3, 6];

    ok(isGameOver(positions));
  });

  it('should return true when diagonal have same symbol', () => {
    const positions = [0, 4, 8];

    ok(isGameOver(positions));
  });
});