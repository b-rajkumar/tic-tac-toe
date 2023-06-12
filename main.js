const { GameController } = require("./src/gameController");
const { keyboardController } = require("./src/keyboardController");
const { Player, Players } = require("./src/player");
const { Renderer } = require("./src/renderer");
const { TicTacToe } = require("./src/tic-tac-toe");

const keyMapping = {
  'q': 0,
  'w': 1,
  'e': 2,
  'a': 3,
  's': 4,
  'd': 5,
  'z': 6,
  'x': 7,
  'c': 8
};

const main = () => {
  const player1 = new Player('manjeet', 'X');
  const player2 = new Player('raj', 'O');
  const players = new Players(player1, player2);

  const ticTacToe = new TicTacToe(players);
  const inputController = new keyboardController(keyMapping);
  const renderer = new Renderer();
  const gc = new GameController(ticTacToe, inputController, renderer);

  gc.start();
};

main();