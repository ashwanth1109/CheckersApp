//------------------------------------------------------------------------------------
// Function that gets all squares with class highlightSquare and removes highlight
// and then adds class dark. It also turns off any click handlers that are on any of the squares
//------------------------------------------------------------------------------------
const resetHighlightSquares = () => {
  //------------------------------------------------------------------------------------
  // Remove class highlight to reset highlight squares to check for new highlight squares based on click event
  //------------------------------------------------------------------------------------
  $(`.highlightSquare`)
    .removeClass(`highlightSquare`)
    .addClass(`dark`);

  //------------------------------------------------------------------------------------
  // Identify all dark squares and turn off their click event handlers to reset them from previous set up
  //------------------------------------------------------------------------------------
  $(`.dark`).off(`click`);
};
