const isGameOver = (symbol, board) => {
  return checkRow(symbol, board) || checkColumn(symbol, board) || checkDiagonal(symbol, board);
};

const checkRow = (symbol, board) => {
  return board.some((row) => row.every((element) => element === symbol));
}

const checkDiagonal = (symbol, board) => {
  if((board[0][0] === symbol) && (board[1][1] === symbol) && (board[2][2] === symbol)) return true;
  if((board[0][2] === symbol) && (board[1][1] === symbol) && (board[2][0] === symbol)) return true;
  return false;
}

const checkColumn = (symbol, board) => {
  const transposedBoard = transpose(board);
  return transposedBoard.some((row) => row.every((element) => element === symbol));
}

const transpose = (matrix) => {
  return matrix.reduce((matrixTranspose, row) => {
    row.forEach((element, index) => {
      const newRow = matrixTranspose[index] || [];
      newRow.push(element);

      matrixTranspose[index] = newRow;
    });
    return matrixTranspose;
  }, []);
};

exports.isGameOver = isGameOver;
