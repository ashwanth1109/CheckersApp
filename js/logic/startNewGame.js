const startNewGame = () => {
  if ($(`#game-over-container`).css(`display`) === `flex`) {
    $(`#game-over-container`).css(`display`, `none`);
  }

  $gameBoard.children().remove();
  createBoard();
  //------------------------------------------------------------------------------------
  // Check for moves available for current player
  //------------------------------------------------------------------------------------
  checkForMovesAvailable();
};
