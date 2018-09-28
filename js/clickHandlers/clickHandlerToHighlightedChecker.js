//------------------------------------------------------------------------------------
// Function that adds a click event listener and on clicking a checker, it selects it
// and shows highlighted squares that the checker can move to
//------------------------------------------------------------------------------------
const clickHandlerToHighlightedChecker = $checker => {
  //------------------------------------------------------------------------------------
  // Add click event handler to all the highlighted checkers
  //------------------------------------------------------------------------------------
  $checker.on(`click`, e => {
    //------------------------------------------------------------------------------------
    // Stop the click event from propogating into its parent square
    //------------------------------------------------------------------------------------
    e.stopPropagation();
    //------------------------------------------------------------------------------------
    // Reset all previously highlighted squares if any from previous click and turns off click events on squares
    //------------------------------------------------------------------------------------
    resetHighlightSquares(); // this reset is required
    //------------------------------------------------------------------------------------
    // Add selectChecker class (yellow border) to indicate that checker has been clicked
    //------------------------------------------------------------------------------------
    addSelectedToChecker($checker);
    //------------------------------------------------------------------------------------
    // The checker has all the moves stored in its diagonal objects array, so we iterate the array
    //------------------------------------------------------------------------------------
    for (const diagonal of $checker.data(`data`).diagonals) {
      //------------------------------------------------------------------------------------
      // if diagonal object item has a jump position, then checker has option to jump
      //------------------------------------------------------------------------------------
      if (diagonal.jumpPosition) {
        //------------------------------------------------------------------------------------
        // if jump position exists, then highlight jump square to indicate this
        //------------------------------------------------------------------------------------
        addHighlightToSquare(diagonal.jumpPosition);
        //------------------------------------------------------------------------------------
        // After highlighting the square, add click handler event to highlighted squares
        // inside the click event handler, we move checker to jump square and capture opponent checker on move square
        //------------------------------------------------------------------------------------
        clickHandlerToHighlightSquare(
          $checker.parent(), // current square
          diagonal.jumpPosition, // jump square
          $checker, // checker
          diagonal.opponentChecker // opponent piece to capture
        );
      }
      //------------------------------------------------------------------------------------
      // If jump square array doesnt exist, then check if checker has a move position
      // If it does, then that means checker can move
      //------------------------------------------------------------------------------------
      else if (diagonal.movePosition) {
        //------------------------------------------------------------------------------------
        // if jump position exists, then highlight move square to indicate this
        //------------------------------------------------------------------------------------
        addHighlightToSquare(diagonal.movePosition);
        //------------------------------------------------------------------------------------
        // Add a click handler to highlighted square. On click we move checker to move square
        //------------------------------------------------------------------------------------
        clickHandlerToHighlightSquare(
          $checker.parent(), // current square
          diagonal.movePosition, // move square
          $checker, // checker
          null // no opponent checker to capture
        );
      }
    }
  });
};
