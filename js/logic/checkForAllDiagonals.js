const checkForAllDiagonals = $checker => {
  //------------------------------------------------------------------------------------
  // Get the checkers parent square and its data object
  //------------------------------------------------------------------------------------
  const $square = $checker.parent();
  const squareData = $square.data(`data`);
  //------------------------------------------------------------------------------------
  // We dont need to check if its player 1 or 2 because this checker can move in all four diagonals
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
};

//------------------------------------------------------------------------------------
// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
// MAJOR RED FLAG - NEED TO UPDATE MOVE POSITION & JUMP POSITION ARRAYS TO ACCOMODATE
// 4 MOVES INSTEAD OF 2. WILL HAVE TO RESET THESE MOVES AND JUMP ARRAY AT THE END OF TURN
//------------------------------------------------------------------------------------
