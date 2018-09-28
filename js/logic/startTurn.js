//------------------------------------------------------------------------------------
// Function that starts turn by getting all the player pieces for current player
// and then checks for moves available for that player
//------------------------------------------------------------------------------------
const startTurn = () => {
  //------------------------------------------------------------------------------------
  // Store all squares in $squares
  //------------------------------------------------------------------------------------
  $squares = $(`.square`);

  //------------------------------------------------------------------------------------
  // Get all player pieces for current player (e.g. black for player 1 and red for player 2)
  //------------------------------------------------------------------------------------
  const $checkers = getPlayerPieces();

  //------------------------------------------------------------------------------------
  // Check for moves available for current player
  //------------------------------------------------------------------------------------
  checkForMovesAvailable($checkers);
};
