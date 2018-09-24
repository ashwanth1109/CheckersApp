//-----ADDING CLASS SELECTED TO CLICKED PIECE IF IT CAN MOVE-----//
const selectPiece = $clickedPiece => {
  //-----GET ALL SQUARES THAT ARE HIGHLIGHTED-----//
  const $squares = $(`.highlight`);
  //-----ITERATE THROUGHT HIGHLIGHTED CLASSES TO UNSELECT ANY PREVIOUSLY SELECTED PIECES-----//
  //-----WAIT A MINUTE, HOW CAN YOU REMOVE CLASS SELECTED FROM SQUARE AND NOT PIECE-----//
  //-----NEED TO FIGURE THIS OUT-----//
  for (let i = 0; i < $squares.length; i++) {
    if ($squares.eq(i).hasClass(`selected`)) {
      $squares.eq(i).removeClass(`selected`);
    }
  }
  //-----SHOW THAT PIECE IS CLICKED BY ADDING CLASS SELECTED: ADDS A YELLOW BORDER-----//
  $clickedPiece.addClass(`selected`);
};
