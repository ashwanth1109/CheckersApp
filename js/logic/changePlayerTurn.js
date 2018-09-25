const changePlayerTurn = () => {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }

  $(`.highlightChecker`)
    .removeClass(`highlightChecker`)
    .off(`click`);

  for (const checker of $(`.player`)) {
    const $checker = $(checker);
    const resetData = $checker.data(`data`);
    resetData.jumpPositions = [];
    resetData.movePosition1 = null;
    resetData.movePosition2 = null;
    $checker.data(`data`, resetData);
  }

  //------------------------------------------------------------------------------------
  // IF YOU WANT TO LOG THE STATE OF THE BOARD, THEN UNCOMMENT THE LINE BELOW
  //------------------------------------------------------------------------------------
  // logStateOfBoard();

  checkForMovesAvailable();
};
