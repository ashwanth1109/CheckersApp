const rotateBoard = animationState => {
  if (animationState === 1) {
    //------------------------------------------------------------------------------------
    // Remove previous animation classes
    //------------------------------------------------------------------------------------
    if ($gameBoard.hasClass(`rotate-board-2`)) {
      $gameBoard.removeClass(`rotate-board-2`).removeClass(`board-state-2`);
    }
    //------------------------------------------------------------------------------------
    // Rotate the board - Add animation class
    //------------------------------------------------------------------------------------
    $gameBoard.addClass(`rotate-board-1`).addClass(`board-state-1`);
  } else if (animationState === 2) {
    //------------------------------------------------------------------------------------
    // Remove previous animation classes
    //------------------------------------------------------------------------------------
    if ($gameBoard.hasClass(`rotate-board-1`)) {
      $gameBoard.removeClass(`rotate-board-1`).removeClass(`board-state-1`);
    }
    //------------------------------------------------------------------------------------
    // Rotate the board - Add animation class
    //------------------------------------------------------------------------------------
    $gameBoard.addClass(`rotate-board-2`).addClass(`board-state-2`);
  }
};
