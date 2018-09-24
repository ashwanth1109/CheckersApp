//-----ADDING ON CLICK HANDLER FOR PIECES-----//
const pieceClick = event => {
  //-----STORE CURRENT TARGET IN CONST CLICKED PIECE-----//
  const $clickedPiece = $(event.currentTarget);
  //-----CHECK IF PIECE CAN MAKE A MOVE USING CLASS HIGHLIGHT-----//
  if ($clickedPiece.hasClass(`highlight`)) {
    selectPiece($clickedPiece);
    // HIGHLIGHT ALL POSITIONS THAT YOU CAN MOVE TO
    highlightNextPositions($clickedPiece);
  }
};
