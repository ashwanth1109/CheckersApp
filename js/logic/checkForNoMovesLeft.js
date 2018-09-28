//------------------------------------------------------------------------------------
// Function checks if there are no moves left to make - win condition 2
//------------------------------------------------------------------------------------
const checkForNoMovesLeft = () => {
  //------------------------------------------------------------------------------------
  // After checking for moves available for all current checkers, if there are no checkers
  // highlighted, then game is at a stalemate
  //------------------------------------------------------------------------------------
  if ($(`.highlightChecker`).length === 0) {
    //------------------------------------------------------------------------------------
    // As current player is the one that cannot make any move, we declare the opponent
    // as the winner by calling the end game function
    //------------------------------------------------------------------------------------
    if (currentPlayer === 1) {
      endGame(2);
    } else {
      endGame(1);
    }
  }
};
