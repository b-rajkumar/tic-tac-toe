const { Board } = require("./src/board");
const { TicTacToe, read } = require("./src/tic-tac-toe");

const main = () => {
  const board = new Board({ rows: 3, columns: 3 });
  const { stdin } = process;

  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");

  stdin.on("data", (key) => {
    if(key === '\u0003') process.exit();
  });

  const players = [
    { name: 'raj', symbol: 'X' },
    { name: 'rishabh', symbol: 'O' }
  ];

  const io = { read, write: console.log };

  const ticTacToe = new TicTacToe(players, board, io, console.log);

  ticTacToe.run();
};

main();