//------------------------------------------------------------------------------------
// Checks if diagonal square is inside the board and checks if its a move square
//------------------------------------------------------------------------------------
const checkForMoveSquare = (diagonal, jumpDiagonal, $checker) => {
  //------------------------------------------------------------------------------------
  // Check if diagonal is inside the board
  //------------------------------------------------------------------------------------
  if (diagonal !== null) {
    //------------------------------------------------------------------------------------
    // Check if move square has a piece
    //------------------------------------------------------------------------------------
    if ($squares.eq(diagonal).data(`data`).hasPiece) {
      //------------------------------------------------------------------------------------
      // Check if jumpDiagonal is inside the board
      //------------------------------------------------------------------------------------
      if (jumpDiagonal !== null) {
        //------------------------------------------------------------------------------------
        // Check if checker on move square is that of opponent and if jump square is free
        // Also stores jump square and the piece that can be captured in checkers data object
        //------------------------------------------------------------------------------------
        if (
          checkIfOpponentPiece(
            $checker, // Checker
            $checker.parent(), // Current Square
            $squares.eq(diagonal), // Move Square
            $squares.eq(jumpDiagonal) // Jump Square
          )
        ) {
          //------------------------------------------------------------------------------------
          // Add highlight to checker as the piece has a position it can move to
          //------------------------------------------------------------------------------------
          addHighlightToChecker($checker);
        }
      }
    }
    //------------------------------------------------------------------------------------
    // If move square has no piece $checker can move here. So highlight it
    //------------------------------------------------------------------------------------
    else {
      //------------------------------------------------------------------------------------
      // If move square is available, then highlight checker piece if not already highlighted
      //------------------------------------------------------------------------------------
      addHighlightToChecker($checker);
      //------------------------------------------------------------------------------------
      // Check if this check is for the diagonal left (1) or right (2) and store move position accordingly
      //------------------------------------------------------------------------------------
      //------------------------------------------------------------------------------------
      // Store move square element in checkers move position array (part of the data object)
      //------------------------------------------------------------------------------------
      $checker.data(`data`).movePositions.push($squares.eq(diagonal));
    }
  }
};
