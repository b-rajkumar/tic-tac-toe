const { table } = require("table");

const renderer = (boardElements) => {
  const board = [];

  process.stdout.cursorTo(0, 2);
  process.stdout.clearScreenDown();

  board.push(boardElements.slice(0, 3));
  board.push(boardElements.slice(3, 6));
  board.push(boardElements.slice(6));
  console.log(table(board));

};

exports.renderer = renderer;