//------------------------------------------------------------------------------------
// Checks if piece on the move square is an opponent piece or not - return true if it there is jump position available
// Store the jump position
//------------------------------------------------------------------------------------
const checkIfOpponentPiece = (
  $square,
  $moveSquare,
  $jumpSquare,
  moveDirectionIndex
) => {
  //------------------------------------------------------------------------------------
  // Store your clicked checker
  //------------------------------------------------------------------------------------
  const $checker = $square.children();
  //------------------------------------------------------------------------------------
  // Store the move square checker
  //------------------------------------------------------------------------------------
  const $moveSquareChecker = $moveSquare.children();
  //------------------------------------------------------------------------------------
  // Check if the move square checker's player is opponent
  //------------------------------------------------------------------------------------
  if ($moveSquareChecker.data(`data`).playerId !== currentPlayer) {
    //------------------------------------------------------------------------------------
    // Check if jump square has a checker. If not, click square's checker can jump
    //------------------------------------------------------------------------------------
    if ($jumpSquare.data(`data`).hasPiece === false) {
      //------------------------------------------------------------------------------------
      // Store the opponent checker on move square as a piece that cen be captured - at 0 index for left and 1 index for right
      //------------------------------------------------------------------------------------
      $checker.data(`data`).checkersThatCanBeCaptured[
        moveDirectionIndex
      ] = $moveSquare.children();
      // MAJOR RED FLAG - IDENTIFY HOW YOU ARE TRYING TO IDENTIFY CAPTURE INDEX WHEN REMOVING PIECE
      //------------------------------------------------------------------------------------
      // Store the jump square in jump position array of clicked checker piece
      //------------------------------------------------------------------------------------
      $checker.data(`data`).jumpPositions[moveDirectionIndex] = $jumpSquare;
      //------------------------------------------------------------------------------------
      // Return true if checker was in fact opponent and jump square data is saved
      //------------------------------------------------------------------------------------
      return true;
    }
  }
  //------------------------------------------------------------------------------------
  // Return false if either the piece was your color or jump square is blocked by another piece
  //------------------------------------------------------------------------------------
  return false;
};
