const { table } = require("table");

class Renderer {
  #window

  render({ moves, currentPlayer, winner, isGameOver }) {
    const [columns, rows] = process.stdout.getWindowSize();
    this.#window = new Array(rows).fill(0).map(() => new Array(columns).fill(' '));

    const board = this.#generateTable(moves);
    const x = Math.round((columns - board.split('\n')[0].length) / 2);
    const y = Math.round((rows - board.split('\n').length) / 2);

    this.#writeToWindow([x, y], board);
    const message = (isGameOver) ? (winner) ? `${winner} won!` : 'Tied' : `${currentPlayer} enter position: `;
    this.#writeToWindow([0, rows - 1], message);

    this.#displayWindow();
  };

  #writeToWindow([x, y], text) {
    let column = x;
    let row = y;
    text.split('').forEach(char => {
      if(char === '\n') {
        row++;
        column = x;
        return;
      }
      this.#window[row][column] = char;
      column++;
    });
  }

  #generateTable(moves) {
    const board = [[], [], []];
    for(let i = 0; i < 9; i += 1) {
      const row = Math.floor(i / 3);
      const column = i % 3;

      board[row][column] = moves[i] || ' ';
    }
    return table(board);
  }

  #displayWindow() {
    process.stdout.cursorTo(0, 0);
    process.stdout.clearScreenDown();
    console.log(this.#window.map(row => row.join('')).join('\n'));
  }

  write(text) {
    const stdout = process.stdout;
    stdout.cursorTo(0, stdout.columns);
    stdout.clearLine();
    stdout.write(text);
  }
};

exports.Renderer = Renderer;