//------------------------------------------------------------------------------------
// Checks if piece on the move square is an opponent piece or not - return true if it there is jump position available
// Store the jump position
//------------------------------------------------------------------------------------
const checkIfOpponentPiece = (
  $square,
  $moveSquare,
  $jumpSquare,
  moveDirectionIndex
) => {
  //------------------------------------------------------------------------------------
  // Store your clicked checker
  //------------------------------------------------------------------------------------
  const $checker = $square.children();
  //------------------------------------------------------------------------------------
  // Store the opponent checker
  //------------------------------------------------------------------------------------
  const $opponentChecker = $moveSquare.children();
  //------------------------------------------------------------------------------------
  // Check if the move square checker's player Id and is not the same as current player
  //------------------------------------------------------------------------------------
  if ($opponentChecker.data(`data`).playerId !== currentPlayer) {
    //------------------------------------------------------------------------------------
    // Check if jump square has a checker. If not, click square's checker can jump
    //------------------------------------------------------------------------------------
    if ($jumpSquare.data(`data`).hasPiece === false) {
      //------------------------------------------------------------------------------------
      // Store the opponent checker on move square as a piece that cen be captured - at 0 index for left and 1 index for right
      //------------------------------------------------------------------------------------
      $checker.data(`data`).checkersThatCanBeCaptured[
        moveDirectionIndex
      ] = $moveSquare.children();
      // MAJOR RED FLAG - IDENTIFY HOW YOU ARE TRYING TO IDENTIFY CAPTURE INDEX WHEN REMOVING PIECE

      //------------------------------------------------------------------------------------
      // Store the jump square in jump position array of clicked checker piece
      //------------------------------------------------------------------------------------
      $checker.data(`data`).jumpPositions[moveDirectionIndex] = $jumpSquare;
      //------------------------------------------------------------------------------------
      // Return true if checker was in fact opponent and jump square data is saved
      //------------------------------------------------------------------------------------
      return true;
    }
  }
  //------------------------------------------------------------------------------------
  // Return false if either the piece was your color or jump square is blocked by another piece
  //------------------------------------------------------------------------------------
  return false;
};

//------------------------------------------------------------------------------------
// Checks if diagonal square is inside the board and checks if its a move square
//------------------------------------------------------------------------------------
const checkForMoveSquare = (
  diagonal,
  jumpDiagonal,
  moveDirectionIndex,
  $checker
) => {
  //------------------------------------------------------------------------------------
  // Check if diagonal is inside the board
  //------------------------------------------------------------------------------------
  if (diagonal !== null) {
    //------------------------------------------------------------------------------------
    // Get diagonal square and store it as move square
    //------------------------------------------------------------------------------------
    const $moveSquare = $squares.eq(diagonal);
    //------------------------------------------------------------------------------------
    // Get jump square which is to the top left of move square
    //------------------------------------------------------------------------------------
    const $jumpSquare = $squares.eq(jumpDiagonal);
    //------------------------------------------------------------------------------------
    // Check if move square has a piece
    //------------------------------------------------------------------------------------
    if ($moveSquare.data(`data`).hasPiece) {
      //------------------------------------------------------------------------------------
      // Check if checker on move square is that of opponent
      //------------------------------------------------------------------------------------
      if (
        checkIfOpponentPiece(
          $checker.parent(),
          $moveSquare,
          $jumpSquare,
          moveDirectionIndex
        )
      ) {
        //------------------------------------------------------------------------------------
        // Add highlight to checker as the piece has a position it can move to
        //------------------------------------------------------------------------------------
        addHighlightToChecker($checker);
      }
    }
    //------------------------------------------------------------------------------------
    // If move square has no piece $checker can move here. So highlight it
    //------------------------------------------------------------------------------------
    else {
      //------------------------------------------------------------------------------------
      // If move square is available, then highlight checker piece if not already highlighted
      //------------------------------------------------------------------------------------
      addHighlightToChecker($checker);
      //------------------------------------------------------------------------------------
      // Check if this check is for the diagonal left (1) or right (2) and store move position accordingly
      //------------------------------------------------------------------------------------
      if (moveDirectionIndex === 0) {
        //------------------------------------------------------------------------------------
        // Store move square element as checkers move position 1. Remember to set null once done with movement
        //------------------------------------------------------------------------------------
        $checker.data(`data`).movePosition1 = $moveSquare;
      } else {
        //------------------------------------------------------------------------------------
        // Store move square element as checkers move position 2. Remember to set null once done with movement
        //------------------------------------------------------------------------------------
        $checker.data(`data`).movePosition2 = $moveSquare;
      }
    }
  }
};

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
