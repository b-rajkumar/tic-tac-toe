const colors = require("colors/safe")
const { Board } = require("./src/board");
const { Player, Participants } = require("./src/player");
const { Renderer } = require("./src/renderer");
const { TicTacToe, read } = require("./src/tic-tac-toe");

const setupStdin = () => {
  const { stdin } = process;

  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.on("data", (key) => {
    if(key === '\u0003') process.exit();
  });
};

const onEnd = () => {
  process.stdout.write("GAME OVER");
  process.exit(0);
};

const main = () => {
  setupStdin();
  const board = new Board();
  const player1 = new Player('rishabh', colors.red('X'));
  const player2 = new Player('debu', colors.green('O'));
  const participants = new Participants([player1, player2]);
  const renderer = new Renderer(participants);
  const ticTacToe = new TicTacToe({
    participants,
    board,
    read,
    renderer,
    onEnd
  });

  ticTacToe.run();
};

main();