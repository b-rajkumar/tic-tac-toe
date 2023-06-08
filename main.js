const { Board } = require("./src/board");
const { isGameOver } = require("./src/game-end");
const { renderer } = require("./src/renderer");
const { TicTacToe, read } = require("./src/tic-tac-toe");

const setupStdin = () => {
  const { stdin } = process;

  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.on("data", (key) => {
    if(key === '\u0003') process.exit();
  });
};

const main = () => {
  setupStdin();
  const board = new Board();
  const io = { read, write: (data) => process.stdout.write(data) };

  const players = [
    { name: 'raj', symbol: 'X' },
    { name: 'rishabh', symbol: 'O' }
  ];

  const onEnd = () => {
    process.stdout.write("GAME OVER");
    process.exit(0);
  };

  const ticTacToe = new TicTacToe({
    players,
    board,
    io,
    isGameOver,
    renderer,
    onEnd
  });

  ticTacToe.run();
};

main();