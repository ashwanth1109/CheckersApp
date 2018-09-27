//------------------------------------------------------------------------------------
// Function checks to see if forward diagonals are available to make a move
//------------------------------------------------------------------------------------
const checkForForwardDiagonals = $checker => {
  //------------------------------------------------------------------------------------
  // Get the checkers parent square data
  //------------------------------------------------------------------------------------
  const squareData = $checker.parent().data(`data`);

  //------------------------------------------------------------------------------------
  // Check if current player is 1
  //------------------------------------------------------------------------------------
  if (currentPlayer === 1) {
    //------------------------------------------------------------------------------------
    // then you want to check for topLeft which is a forward diagonal
    //------------------------------------------------------------------------------------
    const topLeftData = $squares.eq(squareData.topLeft).data(`data`);
    //------------------------------------------------------------------------------------
    // Check if TOP LEFT is inside the board and check if move / jump square is available.
    // If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(
      // checking for top left diagonal
      squareData.topLeft, // move square value
      topLeftData.topLeft, // jump square value
      $checker // checker div
    );
    //------------------------------------------------------------------------------------
    // then you want to check for topRight which is a forward diagonal
    //------------------------------------------------------------------------------------
    const topRightData = $squares.eq(squareData.topRight).data(`data`);
    //------------------------------------------------------------------------------------
    // Check if TOP RIGHT is inside the board and check if move / jump square is available.
    // If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(squareData.topRight, topRightData.topRight, $checker);
  }
  //------------------------------------------------------------------------------------
  // Check if current player is 2
  //------------------------------------------------------------------------------------
  else if (currentPlayer === 2) {
    //------------------------------------------------------------------------------------
    // then you want to check for botLeft which is a forward diagonal
    //------------------------------------------------------------------------------------
    const botLeftData = $squares.eq(squareData.botLeft).data(`data`);
    //------------------------------------------------------------------------------------
    // Check if BOT LEFT is inside the board and check if move / jump square is available.
    // If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(squareData.botLeft, botLeftData.botLeft, $checker);
    //------------------------------------------------------------------------------------
    // then you want to check for botRight which is a forward diagonal
    //------------------------------------------------------------------------------------
    const botRightData = $squares.eq(squareData.botRight).data(`data`);
    //------------------------------------------------------------------------------------
    // Check if BOT RIGHT is inside the board and check if move / jump square is available.
    // If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(squareData.botRight, botRightData.botRight, $checker);
  }
};
