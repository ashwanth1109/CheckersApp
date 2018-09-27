//------------------------------------------------------------------------------------
// Function to add Click Handler To Highlight Square
//------------------------------------------------------------------------------------
const clickHandlerToHighlightSquare = (
  $currentSquare,
  $nextSquare,
  $checker,
  $opponentChecker
) => {
  if ($nextSquare) {
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
        // console.log($opponentChecker.parent().data(`data`));
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
      //------------------------------------------------------------------------------------
      // Reset all diagonals for reuse on next checker click
      //------------------------------------------------------------------------------------
      $checker.data(`data`).diagonals = [];
      //------------------------------------------------------------------------------------
      // Check if checker can jump one more time: Handle this case here bro! FUTURE ENHANCEMENT
      //------------------------------------------------------------------------------------
      changePlayerTurn();
    });
  }
};
