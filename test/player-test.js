const { describe, it, beforeEach } = require('node:test');
const { deepStrictEqual, strictEqual } = require('assert');
const { Player } = require('../src/player');

describe('Player', () => {
  let name;
  let symbol;
  let player;

  beforeEach(() => {
    name = "raj";
    symbol = "X";
    player = new Player(name, symbol);
  });

  it('should give the name of the player', () => {
    const expected = "raj";
    const actual = player.name;

    strictEqual(actual, expected);
  });

  it('should give the symbol of the player', () => {
    const expected = "X";
    const actual = player.symbol;

    strictEqual(actual, expected);
  });

  it('should give the player moves', () => {
    const expected = [];
    const actual = player.moves;

    deepStrictEqual(actual, expected);
  });

  it('should add move to the player moves', () => {
    player.registerMove(1);

    const expected = [1];
    const actual = player.moves;

    deepStrictEqual(actual, expected);
  });

  it('should give all the moves entered by the user', () => {
    player.registerMove(1);
    player.registerMove(6);
    player.registerMove(3);
    player.registerMove(9);

    const expected = [1, 6, 3, 9];
    const actual = player.moves;

    deepStrictEqual(actual, expected);
  })
});