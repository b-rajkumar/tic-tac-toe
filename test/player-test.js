const { describe, it } = require('node:test');
const { deepStrictEqual, strictEqual } = require('assert');
const { Player } = require('../src/player');

describe('Player', () => {
  it('should give the name of the player', () => {
    const name = "raj";
    const symbol = "X";
    const player = new Player(name, symbol);

    const expected = "raj";
    const actual = player.name;

    strictEqual(actual, expected);
  });

  it('should give the symbol of the player', () => {
    const name = "raj";
    const symbol = "X";
    const player = new Player(name, symbol);

    const expected = "X";
    const actual = player.symbol;

    strictEqual(actual, expected);
  });

  it('should give the player moves', () => {
    const name = "raj";
    const symbol = "X";
    const player = new Player(name, symbol);

    const expected = [];
    const actual = player.moves;

    deepStrictEqual(actual, expected);
  });

  it('should add move to the player moves', () => {
    const name = "raj";
    const symbol = "X";
    const player = new Player(name, symbol);
    player.addMove(1);

    const expected = [1];
    const actual = player.moves;

    deepStrictEqual(actual, expected);
  });
});