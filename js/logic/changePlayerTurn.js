const endGame = winner => {
  console.log(`Game is over`);
  if (winner === 1) {
    console.log(`Player Black has won the game`);
  } else if (winner === 2) {
    console.log(`Player Red has won the game`);
  } else {
    console.error(`Incorrect value of param passed into function endGame()`);
  }
};

const changePlayerTurn = () => {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }

  resetCheckerClass();

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
