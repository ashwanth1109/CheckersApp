//------------------------------------------------------------------------------------
// Function that checks if second jump is possible
//------------------------------------------------------------------------------------
const checkForSecondMove = ($square, $checker) => {
  //------------------------------------------------------------------------------------
  // Check if next square is at the edge so as to convert checker to king
  //------------------------------------------------------------------------------------
  checkIfAtOpponentEdge($square);

  if ($checker.data(`data`).isItKing) {
    if (
      !checkForOnlyJump(
        $square.data(`data`).topLeft,
        $squares.eq($square.data(`data`).topLeft).data(`data`).topLeft,
        $checker
      ) &&
      !checkForOnlyJump(
        $square.data(`data`).topRight,
        $squares.eq($square.data(`data`).topRight).data(`data`).topRight,
        $checker
      ) &&
      !checkForOnlyJump(
        $square.data(`data`).botLeft,
        $squares.eq($square.data(`data`).botLeft).data(`data`).botLeft,
        $checker
      ) &&
      !checkForOnlyJump(
        $square.data(`data`).botRight,
        $squares.eq($square.data(`data`).botRight).data(`data`).botRight,
        $checker
      )
    ) {
      resetHighlightSquares();
      changePlayerTurn();
    }
  } else {
    if (currentPlayer === 1) {
      if (
        !checkForOnlyJump(
          $square.data(`data`).topLeft,
          $squares.eq($square.data(`data`).topLeft).data(`data`).topLeft,
          $checker
        ) &&
        !checkForOnlyJump(
          $square.data(`data`).topRight,
          $squares.eq($square.data(`data`).topRight).data(`data`).topRight,
          $checker
        )
      ) {
        resetHighlightSquares();
        changePlayerTurn();
      }
    } else if (currentPlayer === 2) {
      if (
        !checkForOnlyJump(
          $square.data(`data`).botLeft,
          $squares.eq($square.data(`data`).botLeft).data(`data`).botLeft,
          $checker
        ) &&
        !checkForOnlyJump(
          $square.data(`data`).botRight,
          $squares.eq($square.data(`data`).botRight).data(`data`).botRight,
          $checker
        )
      ) {
        resetHighlightSquares();
        changePlayerTurn();
      }
    }
  }
};

// REFACTOR THIS FUNCTION LATER
