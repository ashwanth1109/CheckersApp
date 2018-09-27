//------------------------------------------------------------------------------------
// Function to add Click Handler To Highlight Square
//------------------------------------------------------------------------------------
const clickHandlerToHighlightSquare = (
  $currentSquare,
  $nextSquare,
  $checker,
  $opponentChecker
) => {
  // REFACTOR THIS
  $nextSquare.on(`click`, () => {
    //------------------------------------------------------------------------------------
    // Reset all previously highlighted squares
    //------------------------------------------------------------------------------------
    resetHighlightSquares();
    //------------------------------------------------------------------------------------
    // set current square's hasPiece to false
    //------------------------------------------------------------------------------------
    $currentSquare.data(`data`).hasPiece = false;
    //------------------------------------------------------------------------------------
    // Append checker to next square 1
    //------------------------------------------------------------------------------------
    $checker.appendTo($nextSquare);
    //------------------------------------------------------------------------------------
    // Check if opponent checker exists - if it does set square's hasPiece = false and then remove it
    //------------------------------------------------------------------------------------
    if ($opponentChecker) {
      $opponentChecker.parent().data(`data`).hasPiece = false;
      $opponentChecker.remove();
      if (currentPlayer === 1) {
        blackScore++;
        $(`#black-score`).text(blackScore);
      } else {
        redScore++;
        $(`#red-score`).text(redScore);
      }
    }
    //------------------------------------------------------------------------------------
    // Check if next square is at the edge so as to convert checker to king
    //------------------------------------------------------------------------------------
    checkIfAtOpponentEdge($nextSquare);
    $nextSquare.data(`data`).hasPiece = true;
    $nextSquare.off(`click`);
    $(`.highlightSquare`)
      .removeClass(`highlightSquare`)
      .addClass(`dark`);

    // //------------------------------------------------------------------------------------
    // // Set next square 1's hasPiece to true. Remove highlightSquare class from next square 1
    // //------------------------------------------------------------------------------------
    // $nextSquare1.data(`data`).hasPiece = true;
    // $nextSquare1.removeClass(`highlightSquare`).addClass(`dark`);
    // $nextSquare1.off(`click`);
    // //------------------------------------------------------------------------------------
    // // Check if next square 2 exists
    // //------------------------------------------------------------------------------------
    // if ($nextSquare2) {
    //   //------------------------------------------------------------------------------------
    //   // Remove highlightSquare class from next square 2 since move has been made.
    //   //------------------------------------------------------------------------------------
    //   $nextSquare2.removeClass(`highlightSquare`).addClass(`dark`);
    //   $nextSquare2.off(`click`);
    // }
    //------------------------------------------------------------------------------------
    // Reset all jump positions and move positions for reuse
    //------------------------------------------------------------------------------------
    $checker.data(`data`).jumpPositions = [];
    $checker.data(`data`).movePositions = [];
    $checker.data(`data`).checkersThatCanBeCaptured = [];
    //------------------------------------------------------------------------------------
    // Check if checker can jump one more time: Handle this case here bruh!
    //------------------------------------------------------------------------------------
    changePlayerTurn();
  });
};
