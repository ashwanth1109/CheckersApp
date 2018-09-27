const startNewGame = () => {
  console.log(`starting new game`);
  if ($(`#game-over-container`).css(`display`) === `flex`) {
    $(`#game-over-container`).css(`display`, `none`);
  }

  $gameBoard.children().remove();
  createBoard();
  //------------------------------------------------------------------------------------
  // Change current player back to black or 1
  //------------------------------------------------------------------------------------
  currentPlayer = 1;
  //------------------------------------------------------------------------------------
  // Reset scores
  //------------------------------------------------------------------------------------
  blackScore = 0;
  $(`#black-score`).text(blackScore);
  redScore = 0;
  $(`#red-score`).text(redScore);
  //------------------------------------------------------------------------------------
  // Start Game
  //------------------------------------------------------------------------------------
  startGame();
};
