//------------------------------------------------------------------------------------
// Checks if diagonal square is inside the board and checks if its a move square
//------------------------------------------------------------------------------------
const checkForMoveSquare = (
  diagonal, // move square value
  jumpDiagonal, // jump square value
  $checker
) => {
  console.log(`checking for move square`);
  const diagonal1 = new Diagonal();
  if (diagonal) {
    diagonal1.movePosition = $squares.eq(diagonal); // stores the move square div
  }
  if (jumpDiagonal) {
    diagonal1.jumpPosition = $squares.eq(jumpDiagonal); // stores the jump square div
  }
  //------------------------------------------------------------------------------------
  // Check if diagonal value is not null, then move square is inside the board
  //------------------------------------------------------------------------------------
  if (diagonal !== null) {
    //------------------------------------------------------------------------------------
    // Check if move square has a piece
    //------------------------------------------------------------------------------------
    if (diagonal1.movePosition.data(`data`).hasPiece) {
      //------------------------------------------------------------------------------------
      // Check if jumpDiagonal value is not null, then jump square is inside the board
      //------------------------------------------------------------------------------------
      if (jumpDiagonal !== null) {
        //------------------------------------------------------------------------------------
        // Check if checker on move square is that of opponent and if jump square is free
        // Also stores jump square and the piece that can be captured in checkers data object
        //------------------------------------------------------------------------------------
        if (
          diagonal1.movePosition.children().data(`data`).playerId !==
          currentPlayer
        ) {
          if (diagonal1.jumpPosition.data(`data`).hasPiece === false) {
            diagonal1.opponentChecker = diagonal1.movePosition.children(); // store the checker object
            //------------------------------------------------------------------------------------
            // Add highlight to checker as the piece has a position it can move to
            //------------------------------------------------------------------------------------
            addHighlightToChecker($checker);
          } else {
            diagonal1.jumpPosition = null;
            diagonal1.movePosition = null;
          }
        } else {
          diagonal1.jumpPosition = null;
          diagonal1.movePosition = null;
        }
      } else {
        diagonal1.movePosition = null;
      }
    }
    //------------------------------------------------------------------------------------
    // If move square has no piece $checker can move here. So highlight it
    //------------------------------------------------------------------------------------
    else {
      diagonal1.jumpPosition = null;
      //------------------------------------------------------------------------------------
      // If move square is available, then highlight checker piece if not already highlighted
      //------------------------------------------------------------------------------------
      addHighlightToChecker($checker);
      //------------------------------------------------------------------------------------
      // Check if this check is for the diagonal left (1) or right (2) and store move position accordingly
      //------------------------------------------------------------------------------------
    }
  } else {
    diagonal1.movePosition = null;
    diagonal1.jumpPosition = null;
  }
  $checker.data(`data`).diagonals.push(diagonal1); // store the diagonal object in your checker
};
