//------------------------------------------------------------------------------------
// Checks if diagonal square is inside the board and checks if its a move square
//------------------------------------------------------------------------------------
const checkForMoveSquare = (
  diagonal, // move square value
  jumpDiagonal, // jump square value
  $checker
) => {
  //------------------------------------------------------------------------------------
  // Create variables for diagonal and jump diagonal square - jquery objects
  //------------------------------------------------------------------------------------
  let $diagonal = null,
    $jumpDiagonal = null;
  //------------------------------------------------------------------------------------
  // Check if move square value is null or not
  //------------------------------------------------------------------------------------
  if (diagonal) {
    $diagonal = $squares.eq(diagonal); // stores the move square div
  }
  //------------------------------------------------------------------------------------
  // Check if jump square value is null or not
  //------------------------------------------------------------------------------------
  if (jumpDiagonal) {
    $jumpDiagonal = $squares.eq(jumpDiagonal); // stores the jump square div
  }
  //------------------------------------------------------------------------------------
  // Create data object from Diagonal class and call it diagonalObject
  //------------------------------------------------------------------------------------
  const diagonalObject = new Diagonal();
  //------------------------------------------------------------------------------------
  // Check if move square is not null, then move square is inside the board
  //------------------------------------------------------------------------------------
  if ($diagonal !== null) {
    //------------------------------------------------------------------------------------
    // Check if move square has a piece
    //------------------------------------------------------------------------------------
    if ($diagonal.data(`data`).hasPiece) {
      //------------------------------------------------------------------------------------
      // Check if jump square value is not null, then jump square is inside the board
      //------------------------------------------------------------------------------------
      if ($jumpDiagonal !== null) {
        //------------------------------------------------------------------------------------
        // Check if checker on move square is that of opponent and if jump square is free
        // Also stores jump square and the piece that can be captured in checkers data object
        //------------------------------------------------------------------------------------
        if ($diagonal.children().data(`data`).playerId !== currentPlayer) {
          if ($jumpDiagonal.data(`data`).hasPiece === false) {
            diagonalObject.jumpPosition = $jumpDiagonal;
            diagonalObject.opponentChecker = $diagonal.children(); // store the checker object
            //------------------------------------------------------------------------------------
            // Add highlight to checker as the piece has a position it can move to
            //------------------------------------------------------------------------------------
            addHighlightToChecker($checker);
          }
        }
      }
    }
    //------------------------------------------------------------------------------------
    // If move square has no piece $checker can move here. So highlight it
    //------------------------------------------------------------------------------------
    else {
      //------------------------------------------------------------------------------------
      // Since piece can move here, we store the move position
      //------------------------------------------------------------------------------------
      diagonalObject.movePosition = $diagonal;
      //------------------------------------------------------------------------------------
      // If move square is available, then highlight checker piece if not already highlighted
      //------------------------------------------------------------------------------------
      addHighlightToChecker($checker);
    }
  }
  //------------------------------------------------------------------------------------
  // We store the diagonal object in the diagonals array of checker object
  //------------------------------------------------------------------------------------
  $checker.data(`data`).diagonals.push(diagonalObject); // store the diagonal object in your checker
};
