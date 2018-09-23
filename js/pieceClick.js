//

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

const highlightSquare = ($square, $otherSquare, $clickedPiece) => {
  if (!$square.data(`squareData`).hasPiece) {
    $square.removeClass(`dark`).addClass(`darker`);
    $square.on(`click`, () => {
      $clickedPiece.removeClass(`selected`).appendTo($square);
      $square.removeClass(`darker`).addClass(`dark`);
      $square.off(`click`);
      $otherSquare.removeClass(`darker`).addClass(`dark`);
      $otherSquare.off(`click`);

      // MOVE HAS BEEN MADE
      // TIME TO CHANGE PLAYER TURN
    });
  }
};

//-----HIGHLIGHT POSITIONS TO MOVE TO-----//
const highlightNextPositions = $clickedPiece => {
  //-----CHECK IF ITS PLAYER 0 TURN-----//
  if (player0Turn) {
    //-----GET SQUARE DATA OF CLICKED PIECE-----//
    const squareData = $clickedPiece.parent().data(`squareData`);
    //-----BOT LEFT AND BOT RIGHT ARRAYS-----//
    const botLeft = squareData.botLeft;
    const botRight = squareData.botRight;
    //-----CREATE VARIABLES FOR STORING BOT LEFT & RIGHT SQUARES-----//
    //-----GET BOT LEFT SQUARE-----//
    const $botLeft = $(`.square`).eq((botLeft[0] - 1) * 8 + botLeft[1] - 1);
    //-----GET BOT RIGHT SQUARE-----//
    const $botRight = $(`.square`).eq((botRight[0] - 1) * 8 + botRight[1] - 1);
    //-----CHECK IF BOT LEFT IS INSIDE THE BOARD-----//
    if (botLeft[0] && botLeft[1] !== 9) {
      // Maybe refactor above if condition to add diagonal existence to class?
      //-----CHECK WHETHER TO HIGHLIGHT BOT LEFT-----//
      highlightSquare($botLeft, $botRight, $clickedPiece);
    }
    if (botRight[0] !== 9 && botRight[1] !== 9) {
      //-----CHECK WHETHER TO HIGHLIGHT BOT RIGHT-----//
      highlightSquare($botRight, $botLeft, $clickedPiece);
    }
  }
  //-----CHECK IF ITS PLAYER 1 TURN-----//
  else {
    // HANDLE THIS CASE BRUH!
  }
};

//-----ADDING ON CLICK HANDLER FOR PIECES-----//
const pieceClick = event => {
  //-----STORE CURRENT TARGET IN CONST CLICKED PIECE-----//
  const $clickedPiece = $(event.currentTarget);
  //-----CHECK IF PIECE CAN MAKE A MOVE USING CLASS HIGHLIGHT-----//
  if ($clickedPiece.hasClass(`highlight`)) {
    selectPiece($clickedPiece);
    // HIGHLIGHT ALL POSITIONS THAT YOU CAN MOVE TO
    if (player0Turn) {
      highlightNextPositions($clickedPiece);
    }
  }
};
