//------------------------------------------------------------------------------------
// Checks if diagonal square is inside the board and checks if its a move square
//------------------------------------------------------------------------------------
const checkForMoveSquare = (
  diagonal,
  jumpDiagonal,
  moveDirectionIndex,
  $checker
) => {
  //------------------------------------------------------------------------------------
  // Check if diagonal is inside the board
  //------------------------------------------------------------------------------------
  if (diagonal !== null) {
    //------------------------------------------------------------------------------------
    // Get diagonal square and store it as move square
    //------------------------------------------------------------------------------------
    const $moveSquare = $squares.eq(diagonal);
    //------------------------------------------------------------------------------------
    // Get jump square which is to the top left of move square
    //------------------------------------------------------------------------------------
    const $jumpSquare = $squares.eq(jumpDiagonal);
    //------------------------------------------------------------------------------------
    // Check if move square has a piece
    //------------------------------------------------------------------------------------
    if ($moveSquare.data(`data`).hasPiece) {
      //------------------------------------------------------------------------------------
      // Check if checker on move square is that of opponent
      //------------------------------------------------------------------------------------
      if (
        checkIfOpponentPiece(
          $checker.parent(),
          $moveSquare,
          $jumpSquare,
          moveDirectionIndex
        )
      ) {
        //------------------------------------------------------------------------------------
        // Add highlight to checker as the piece has a position it can move to
        //------------------------------------------------------------------------------------
        addHighlightToChecker($checker);
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
      if (moveDirectionIndex === 0) {
        //------------------------------------------------------------------------------------
        // Store move square element as checkers move position 1. Remember to set null once done with movement
        //------------------------------------------------------------------------------------
        $checker.data(`data`).movePosition1 = $moveSquare;
      } else {
        //------------------------------------------------------------------------------------
        // Store move square element as checkers move position 2. Remember to set null once done with movement
        //------------------------------------------------------------------------------------
        $checker.data(`data`).movePosition2 = $moveSquare;
      }
    }
  }
};
