//------------------------------------------------------------------------------------
// Add Highlight Class to checker - adds a white border to checker
//------------------------------------------------------------------------------------
const addHighlightToChecker = $checker => {
  //------------------------------------------------------------------------------------
  // Check whether checker is already highlighted
  //------------------------------------------------------------------------------------
  if (!$checker.hasClass(`highlightChecker`)) {
    //------------------------------------------------------------------------------------
    // If checker is not highlighted, then add class highlight checker
    //------------------------------------------------------------------------------------
    $checker.addClass(`highlightChecker`);
    //------------------------------------------------------------------------------------
    // Add click event handler to all the highlighted checkers
    //------------------------------------------------------------------------------------
    $checker.on(`click`, () => {
      //------------------------------------------------------------------------------------
      // Reset all previously highlighted squares
      //------------------------------------------------------------------------------------
      resetHighlightSquares();

      //------------------------------------------------------------------------------------
      // Get checker that was clicked
      //------------------------------------------------------------------------------------
      const $checker2 = $(event.currentTarget);
      //------------------------------------------------------------------------------------
      // Get current square on which the checker is positioned
      //------------------------------------------------------------------------------------
      const $currentSquare = $checker2.parent();

      //------------------------------------------------------------------------------------
      // Get move square 1 from checkers data property move position 1
      //------------------------------------------------------------------------------------
      const $moveSquare1 = $checker2.data(`data`).movePosition1;
      //------------------------------------------------------------------------------------
      // Get move square 2 from checkers data property move position 2
      //------------------------------------------------------------------------------------
      const $moveSquare2 = $checker2.data(`data`).movePosition2;
      //------------------------------------------------------------------------------------
      // Get jump square 1 from checkers data array jump positions
      //------------------------------------------------------------------------------------
      const $jumpSquare1 = $checker2.data(`data`).jumpPositions[0];
      //------------------------------------------------------------------------------------
      // If jump square 1 is present then get opponent checker 1 from checkers captured array
      //------------------------------------------------------------------------------------
      const $opponentChecker1 = $checker2.data(`data`)
        .checkersThatCanBeCaptured[0];
      //------------------------------------------------------------------------------------
      // Get jump square 1 from checkers data array jump positions
      //------------------------------------------------------------------------------------
      const $jumpSquare2 = $checker2.data(`data`).jumpPositions[1];
      //------------------------------------------------------------------------------------
      // If jump square 1 is present then get opponent checker 1 from checkers captured array
      //------------------------------------------------------------------------------------
      const $opponentChecker2 = $checker2.data(`data`)
        .checkersThatCanBeCaptured[1];
      //------------------------------------------------------------------------------------
      // Check if jump square 1 or 2 exist. If they do, they should be prioritized ahead of move squares
      //------------------------------------------------------------------------------------
      if ($jumpSquare1 || $jumpSquare2) {
        //------------------------------------------------------------------------------------
        // Check if jump square 1 exists
        //------------------------------------------------------------------------------------
        if ($jumpSquare1) {
          //------------------------------------------------------------------------------------
          // Add class highlight to jump square 1
          //------------------------------------------------------------------------------------
          addHighlightToSquare($jumpSquare1);
          clickHandlerToHighlightSquare(
            $currentSquare,
            $jumpSquare1,
            $jumpSquare2,
            $checker2,
            $opponentChecker1
          );
        }

        if ($jumpSquare2) {
          addHighlightToSquare($jumpSquare2);
          clickHandlerToHighlightSquare(
            $currentSquare,
            $jumpSquare2,
            $jumpSquare1,
            $checker2,
            $opponentChecker2
          );
        }
      }
      //------------------------------------------------------------------------------------
      // Check if move square 1 or 2 exist. Since check for jump is already done, we dont need to worry about it
      //------------------------------------------------------------------------------------
      else if ($moveSquare1 || $moveSquare2) {
        //------------------------------------------------------------------------------------
        // Check if move square 1 exists
        //------------------------------------------------------------------------------------
        if ($moveSquare1) {
          //------------------------------------------------------------------------------------
          // Add class highlight to move square 1
          //------------------------------------------------------------------------------------
          addHighlightToSquare($moveSquare1);
          clickHandlerToHighlightSquare(
            $currentSquare,
            $moveSquare1,
            $moveSquare2,
            $checker2,
            $opponentChecker1
          );
        }
        //------------------------------------------------------------------------------------
        // Check if move square 2 exists
        //------------------------------------------------------------------------------------
        if ($moveSquare2) {
          //------------------------------------------------------------------------------------
          // Add class highlight to move square 2
          //------------------------------------------------------------------------------------
          addHighlightToSquare($moveSquare2);
          clickHandlerToHighlightSquare(
            $currentSquare,
            $moveSquare2,
            $moveSquare1,
            $checker2,
            $opponentChecker2
          );
        }
      }
    });
  }
};
