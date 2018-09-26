const startNewGame = () => {
  console.log(`starting a new game`);
  $gameBoard.children().remove();
  createBoard();
  //------------------------------------------------------------------------------------
  // Check for moves available for current player
  //------------------------------------------------------------------------------------
  checkForMovesAvailable();
};
