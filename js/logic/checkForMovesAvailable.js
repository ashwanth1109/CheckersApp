//------------------------------------------------------------------------------------
// Function that iterates through the array of checkers and checks for all diagonals
// if checker is king, otherwise it checks for forward diagonals
//------------------------------------------------------------------------------------
const checkForMovesAvailable = $checkers => {
  //------------------------------------------------------------------------------------
  // Iterate through the array of player pieces
  //------------------------------------------------------------------------------------
  for (const checker of $checkers) {
    //------------------------------------------------------------------------------------
    // Check if current checker piece is king piece or not
    //------------------------------------------------------------------------------------
    if ($(checker).data(`data`).isItKing) {
      //------------------------------------------------------------------------------------
      // If King piece, then checker can move in 4 diagonals
      //------------------------------------------------------------------------------------
      checkForAllDiagonals($(checker));
    } else {
      //------------------------------------------------------------------------------------
      // Else, king piece can only move in forward (2) diagonals
      //------------------------------------------------------------------------------------
      checkForForwardDiagonals($(checker));
    }
  }
  console.log($(`.highlightChecker`));
  if ($(`.highlightChecker`).length === 0) {
    console.log(`entering highlight checker is null condition`);
    if (currentPlayer === 1) {
      endGame(2);
    } else {
      endGame(1);
    }
  }
};
