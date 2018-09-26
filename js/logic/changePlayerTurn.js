const changePlayerTurn = () => {
  //------------------------------------------------------------------------------------
  // Check for win condition
  //------------------------------------------------------------------------------------
  if (blackScore === 12) {
    endGame(1);
  } else if (redScore === 12) {
    endGame(2);
  }

  //------------------------------------------------------------------------------------
  // Alternate player turn
  //------------------------------------------------------------------------------------
  if (currentPlayer === 1) {
    currentPlayer = 2;
    //------------------------------------------------------------------------------------
    // Remove previous animation classes
    //------------------------------------------------------------------------------------
    if ($gameBoard.hasClass(`rotate-board-2`)) {
      $gameBoard.removeClass(`rotate-board-2`).removeClass(`board-state-2`);
    }
    //------------------------------------------------------------------------------------
    // Rotate the board - Add animation class
    //------------------------------------------------------------------------------------
    $gameBoard.addClass(`rotate-board-1`).addClass(`board-state-1`);
  } else {
    currentPlayer = 1;
    //------------------------------------------------------------------------------------
    // Remove previous animation classes
    //------------------------------------------------------------------------------------
    if ($gameBoard.hasClass(`rotate-board-1`)) {
      $gameBoard.removeClass(`rotate-board-1`).removeClass(`board-state-1`);
    }
    //------------------------------------------------------------------------------------
    // Rotate the board - Add animation class
    //------------------------------------------------------------------------------------
    $gameBoard.addClass(`rotate-board-2`).addClass(`board-state-2`);
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

  setTimeout(() => {
    checkForMovesAvailable();
  }, 1500);
};
