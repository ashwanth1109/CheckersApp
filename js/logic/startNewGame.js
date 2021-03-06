//------------------------------------------------------------------------------------
// Function to start a new game
//------------------------------------------------------------------------------------
const startNewGame = () => {
  //------------------------------------------------------------------------------------
  // If game over container is showing, then hide it as we start new game
  //------------------------------------------------------------------------------------
  if ($(`#game-over-container`).css(`display`) === `flex`) {
    $(`#game-over-container`).css(`display`, `none`);
  }

  //------------------------------------------------------------------------------------
  // Remove the checkerboard that was previously there so that we can create new board
  //------------------------------------------------------------------------------------
  $gameBoard.children().remove();
  if ($gameBoard.hasClass(`rotate-board-1`)) {
    //------------------------------------------------------------------------------------
    // If board is already rotated to begin with, then we remove and add class accordingly
    // to rotate the board back into its initial state
    //------------------------------------------------------------------------------------
    $gameBoard.removeClass(`rotate-board-1`).removeClass(`board-state-1`);
    $gameBoard.addClass(`rotate-board-2`).addClass(`board-state-2`);
  }
  //------------------------------------------------------------------------------------
  // Create the board
  //------------------------------------------------------------------------------------
  createBoard();
  //------------------------------------------------------------------------------------
  // Set current player back to black or 1
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
  // Start Turn
  //------------------------------------------------------------------------------------
  startTurn();
};
