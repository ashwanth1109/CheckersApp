const clickHandlerToHighlightedChecker = $checker => {
  //------------------------------------------------------------------------------------
  // Add click event handler to all the highlighted checkers
  //------------------------------------------------------------------------------------
  $checker.on(`click`, () => {
    //------------------------------------------------------------------------------------
    // Reset all previously highlighted squares
    //------------------------------------------------------------------------------------
    resetHighlightSquares();
    //------------------------------------------------------------------------------------
    // Add selectChecker class to indicate that checker has been clicked
    //------------------------------------------------------------------------------------
    addSelectedToChecker($checker);
    //------------------------------------------------------------------------------------
    // Get current square on which the checker is positioned
    //------------------------------------------------------------------------------------
    const $currentSquare = $checker.parent();
    //------------------------------------------------------------------------------------
    // Get move square array from checkers data array move positions
    //------------------------------------------------------------------------------------
    const $moveSquares = $checker.data(`data`).movePositions;
    //------------------------------------------------------------------------------------
    // Get jump square array from checkers data array jump positions
    //------------------------------------------------------------------------------------
    const $jumpSquares = $checker.data(`data`).jumpPositions;
    //------------------------------------------------------------------------------------
    // Check if jump squares array has atleast one element.
    // If they do, they should be prioritized ahead of move squares
    //------------------------------------------------------------------------------------
    if ($jumpSquares.length > 0) {
      //------------------------------------------------------------------------------------
      // If jump squares array has elements then get opponent checkers array from $checker
      //------------------------------------------------------------------------------------
      const $opponentCheckers = $checker.data(`data`).checkersThatCanBeCaptured;
      //------------------------------------------------------------------------------------
      // Check if jump square array exists
      //------------------------------------------------------------------------------------
      for (let i = 0; i < $jumpSquares.length; i++) {
        addHighlightToSquare($jumpSquares[i]);
        clickHandlerToHighlightSquare(
          $currentSquare,
          $jumpSquares[i],
          $checker,
          $opponentCheckers[i]
        );
      }
    }
    //------------------------------------------------------------------------------------
    // Check if move square 1 or 2 exist. Since check for jump is already done, we dont need to worry about it
    //------------------------------------------------------------------------------------
    else if ($moveSquares.length > 0) {
      //------------------------------------------------------------------------------------
      // Check if move square array exists
      //------------------------------------------------------------------------------------
      if ($moveSquares) {
        for (let i = 0; i < $moveSquares.length; i++) {
          addHighlightToSquare($moveSquares[i]);
          clickHandlerToHighlightSquare(
            $currentSquare,
            $moveSquares[i],
            $checker,
            null
          );
        }
      }
    }
  });
};
