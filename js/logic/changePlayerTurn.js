const changePlayerTurn = () => {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }

  $(`.highlightChecker`).removeClass(`highlightChecker`);

  for (const checker of $(`.player`)) {
    const $checker = $(checker);
    const resetData = $checker.data(`data`);
    resetData.jumpPositions = [];
    resetData.movePositions = [];
    $checker.data(`data`, resetData);
  }

  checkForMovesAvailable();

  // for (const square of $squares) {
  //   const $square = $(square);
  //   const squareData = $square.data(`data`);
  //   console.log(
  //     `The square at row ${squareData.row} and column ${
  //       squareData.column
  //     } has piece - ${squareData.hasPiece}`
  //   );
  // }

  // for (const checker of $(`.player`)) {
  //   const $checker = $(checker);
  //   console.log($checker.data(`data`));
  // }
};
