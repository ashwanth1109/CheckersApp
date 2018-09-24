//-----HIGHLIGHT SQUARES THAT PIECE CAN MOVE TO-----//
const addClassHighlight = (row, column, $square) => {
  //-----GET SQUARE DATA INFO ABOUT NEXT SQUARE-----//
  const nextSquareData = $squares
    .eq((row - 1) * 8 + column - 1)
    .data(`squareData`);
  //-----IF NEXT SQUARE HAS NO PIECE THEN CURRENT PIECE CAN MAKE A MOVE-----//
  if (nextSquareData.hasPiece === false) {
    //-----HIGHLIGHT PIECE TO INDICATE THAT PIECE HAS POSITIONS TO MOVE TO-----//
    $square.children().addClass(`highlight`);
  }
  // NEED TO HANDLE SPECIAL CASE FOR OPPONENT PIECE IS ON NEXT SQUARE // OR MAYBE NOT // ILL FIGURE IT OUT LATER
};
