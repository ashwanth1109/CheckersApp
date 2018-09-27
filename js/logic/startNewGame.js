const startNewGame = () => {
  console.log(`starting new game`);
  if ($(`#game-over-container`).css(`display`) === `flex`) {
    $(`#game-over-container`).css(`display`, `none`);
  }

  $gameBoard.children().remove();
  createBoard();
  //------------------------------------------------------------------------------------
  // Store all squares in $squares
  //------------------------------------------------------------------------------------
  $squares = $(`.square`);
  //------------------------------------------------------------------------------------
  // Change current player back to black or 1
  //------------------------------------------------------------------------------------
  currentPlayer = 1;
  //------------------------------------------------------------------------------------
  // Check for moves available for current player
  //------------------------------------------------------------------------------------
  checkForMovesAvailable();
};
