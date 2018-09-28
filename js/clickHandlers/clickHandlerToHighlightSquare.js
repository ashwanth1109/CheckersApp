//------------------------------------------------------------------------------------
// Function to add Click Handler To Highlight Square
//------------------------------------------------------------------------------------
const clickHandlerToHighlightSquare = (
  $currentSquare,
  $nextSquare,
  $checker,
  $opponentChecker
) => {
  //------------------------------------------------------------------------------------
  // Add click event to next square
  //------------------------------------------------------------------------------------
  $nextSquare.on(`click`, () => {
    //------------------------------------------------------------------------------------
    // Reset all previously highlighted squares
    //------------------------------------------------------------------------------------
    resetHighlightSquares();
    //------------------------------------------------------------------------------------
    // Append checker to next square
    //------------------------------------------------------------------------------------
    $checker.appendTo($nextSquare);
    //------------------------------------------------------------------------------------
    // set current square's hasPiece to false
    //------------------------------------------------------------------------------------
    $currentSquare.data(`data`).hasPiece = false;
    //------------------------------------------------------------------------------------
    // Once we append checker to next square, let square know that it has a piece
    //------------------------------------------------------------------------------------
    $nextSquare.data(`data`).hasPiece = true;
    //------------------------------------------------------------------------------------
    // Check if opponent checker exists - if it does set square's hasPiece = false and then remove it
    //------------------------------------------------------------------------------------
    if ($opponentChecker) {
      //------------------------------------------------------------------------------------
      // If opponent checker does exist, then we set the squares hasPiece to false as we will remove piece
      //------------------------------------------------------------------------------------
      $opponentChecker.parent().data(`data`).hasPiece = false;
      //------------------------------------------------------------------------------------
      // Remove the opponent checker off the board to indicate that it has been captured
      //------------------------------------------------------------------------------------
      $opponentChecker.remove();
      //------------------------------------------------------------------------------------
      // Check if current player is 1 or 2
      //------------------------------------------------------------------------------------
      if (currentPlayer === 1) {
        //------------------------------------------------------------------------------------
        // If current player is 1, then we update black score by 1
        //------------------------------------------------------------------------------------
        blackScore++;
        $(`#black-score`).text(blackScore);
      } else {
        //------------------------------------------------------------------------------------
        // else, we update red score by 1
        //------------------------------------------------------------------------------------
        redScore++;
        $(`#red-score`).text(redScore);
      }
    }
    //------------------------------------------------------------------------------------
    // Check if next square is at the edge so as to convert checker to king
    //------------------------------------------------------------------------------------
    checkIfAtOpponentEdge($nextSquare);
    //------------------------------------------------------------------------------------
    // We reset all previously highlighted squares and turn off their click handlers
    //------------------------------------------------------------------------------------
    resetHighlightSquares(); // WEIRD: code seems to work without this as well. WHY??
    //------------------------------------------------------------------------------------
    // Check if checker can jump one more time: Handle this case here bro! FUTURE ENHANCEMENT
    //------------------------------------------------------------------------------------
    changePlayerTurn();
  });
};
