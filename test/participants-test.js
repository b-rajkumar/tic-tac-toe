const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Player, Participants } = require('../src/player');

describe('Participants', () => {
  it('should give the first player', () => {
    const player1 = new Player('rishabh', 'X');
    const player2 = new Player('debu', 'O');

    const participants = new Participants([player1, player2]);
    const expected = 'rishabh';
    const actual = participants.getPlayer().name;

    deepStrictEqual(actual, expected);
  });

  it('should give the second player after switch', () => {
    const player1 = new Player('rishabh', 'X');
    const player2 = new Player('debu', 'O');

    const participants = new Participants([player1, player2]);
    participants.switch();
    const expected = 'debu';
    const actual = participants.getPlayer().name;

    deepStrictEqual(actual, expected);
  });

  it('should give the first player after switching 2 times', () => {
    const player1 = new Player('rishabh', 'X');
    const player2 = new Player('debu', 'O');

    const participants = new Participants([player1, player2]);
    participants.switch();
    participants.switch();
    const expected = 'rishabh';
    const actual = participants.getPlayer().name;

    deepStrictEqual(actual, expected);
  });
});