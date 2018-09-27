//------------------------------------------------------------------------------------
// Checks if piece on the move square is an opponent piece or not - return true if it there is jump position available
// Store the jump position
//------------------------------------------------------------------------------------
const checkIfOpponentPiece = ($checker, $square, $moveSquare, $jumpSquare) => {
  //------------------------------------------------------------------------------------
  // Check if the move square checker's player is opponent
  //------------------------------------------------------------------------------------
  if ($moveSquare.children().data(`data`).playerId !== currentPlayer) {
    //------------------------------------------------------------------------------------
    // Check if jump square has a checker, if not checker can jump
    //------------------------------------------------------------------------------------
    if ($jumpSquare.data(`data`).hasPiece === false) {
      //------------------------------------------------------------------------------------
      // Store the opponent checker as a piece that cen be captured
      //------------------------------------------------------------------------------------
      $checker
        .data(`data`)
        .checkersThatCanBeCaptured.push($moveSquare.children());
      // MAJOR RED FLAG - IDENTIFY HOW YOU ARE TRYING TO IDENTIFY CAPTURE INDEX WHEN REMOVING PIECE
      //------------------------------------------------------------------------------------
      // Store the jump square in jump position array of clicked checker piece
      //------------------------------------------------------------------------------------
      $checker.data(`data`).jumpPositions.push($jumpSquare);
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
