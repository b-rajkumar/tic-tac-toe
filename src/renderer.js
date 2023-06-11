const { table } = require("table");
const { chunk } = require("../lib/chunk");

class Renderer {
  #participants
  #startingRow
  #startingColumn

  constructor(participants) {
    this.#participants = participants;
  }

  display(boardElements) {
    const board = table(chunk(boardElements, 3));
    const [columns, rows] = process.stdout.getWindowSize();
    const boardSide = board.split("\n")[0].length;

    process.stdout.cursorTo(0, 0);
    process.stdout.clearScreenDown();

    this.#startingColumn = Math.round((columns - boardSide) / 2);
    this.#startingRow = Math.round(rows / 5);
    this.log([this.#startingColumn, this.#startingRow], board);
  }

  log([column, row], data) {
    const lines = data.split('\n');
    lines.forEach((line) => {
      this.#logLine([column, row], line);
      row++;
    })
  }

  #logLine([column, row], line) {
    process.stdout.cursorTo(column, row);
    process.stdout.write(line);
  }

  write(line) {
    const row = Math.round(this.#startingRow * 3);
    const column = Math.round((process.stdout.columns - line.length) / 2);
    this.#logLine([column, row], line);
  }
};

exports.Renderer = Renderer;