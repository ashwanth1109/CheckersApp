//------------------------------------------------------------------------------------
// Function checks to see if forward diagonals are available to make a move
//------------------------------------------------------------------------------------
const checkForForwardDiagonals = $checker => {
  //------------------------------------------------------------------------------------
  // Identify all square with checker pieces for a particular player & get its data object
  //------------------------------------------------------------------------------------
  const $square = $checker.parent();
  const squareData = $square.data(`data`);

  //------------------------------------------------------------------------------------
  // Check if current player is 1
  //------------------------------------------------------------------------------------
  if (currentPlayer === 1) {
    //------------------------------------------------------------------------------------
    // If current player is 1, then you want to check for topLeft and topRight which are its forward diagonals
    //------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------
    // Check if TOP LEFT is inside the board and check if move / jump square is available. If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(
      squareData.topLeft,
      $squares.eq(squareData.topLeft).data(`data`).topLeft,
      0,
      $checker
    );
    //------------------------------------------------------------------------------------
    // Check if TOP RIGHT is inside the board and check if move / jump square is available. If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(
      squareData.topRight,
      $squares.eq(squareData.topRight).data(`data`).topRight,
      1,
      $checker
    );
  }
  //------------------------------------------------------------------------------------
  // Check if current player is 2
  //------------------------------------------------------------------------------------
  else if (currentPlayer === 2) {
    //------------------------------------------------------------------------------------
    // If current player is 2, then you want to check for botLeft and botRight which are its forward diagonals
    //------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------
    // Check if BOT LEFT is inside the board and check if move / jump square is available. If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(
      squareData.botLeft,
      $squares.eq(squareData.botLeft).data(`data`).botLeft,
      0,
      $checker
    );
    //------------------------------------------------------------------------------------
    // Check if BOT RIGHT is inside the board and check if move / jump square is available. If so, highlight checker
    //------------------------------------------------------------------------------------
    checkForMoveSquare(
      squareData.botRight,
      $squares.eq(squareData.botRight).data(`data`).botRight,
      1,
      $checker
    );
  }
};
