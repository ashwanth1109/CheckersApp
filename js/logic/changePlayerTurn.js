//------------------------------------------------------------------------------------
// This function checks if game is over. If it is, it invokes end game function
// Else, it toggles the value of the current player and starts the next turn
//------------------------------------------------------------------------------------
const changePlayerTurn = () => {
  //------------------------------------------------------------------------------------
  // Check to see if game is over, by checking win condition
  //------------------------------------------------------------------------------------
  checkIfGameOver();

  //------------------------------------------------------------------------------------
  // Alternate player turn
  //------------------------------------------------------------------------------------
  if (currentPlayer === 1) {
    //------------------------------------------------------------------------------------
    // If board rotation is enabled, then we rotate the board based on which player is current player
    //------------------------------------------------------------------------------------
    if (boardRotation) {
      rotateBoard(currentPlayer); // 1 is the animation state
    }
    currentPlayer = 2;
  } else {
    //------------------------------------------------------------------------------------
    // If board rotation is enabled, then we rotate the board based on which player is current player
    //------------------------------------------------------------------------------------
    if (boardRotation) {
      rotateBoard(currentPlayer); // 2 is the animation state
    }
    currentPlayer = 1;
  }

  //------------------------------------------------------------------------------------
  // Resets all checkers to non highlighted and non clickable state and resets all diagonals data
  //------------------------------------------------------------------------------------
  resetCheckerClass();

  //------------------------------------------------------------------------------------
  // IF YOU WANT TO LOG THE STATE OF THE BOARD, THEN UNCOMMENT THE LINE BELOW
  //------------------------------------------------------------------------------------
  // logStateOfBoard();
  // console.log(
  //   `***********************************************************************`
  // );

  //------------------------------------------------------------------------------------
  // If board rotation animation is enabled
  //------------------------------------------------------------------------------------
  if (boardRotation) {
    //------------------------------------------------------------------------------------
    // Then we wait till animation completes before starting the next turn
    //------------------------------------------------------------------------------------
    setTimeout(() => {
      startTurn();
    }, 1500);
  } else {
    //------------------------------------------------------------------------------------
    // Else, we start the next turn immediately
    //------------------------------------------------------------------------------------
    startTurn();
  }
};
