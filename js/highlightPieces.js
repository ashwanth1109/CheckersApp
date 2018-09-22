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

const findPlayerPieces = squareData => {
  if (squareData.playerId === 0) {
    //-----GET ALL DIAGONAL POSITIONS THAT PLAYER 1 CAN MOVE-----//
    const botLeft = squareData.botLeft;
    const botRight = squareData.botRight;
    // CHECK IF BOT LEFT SQUARE IS OUTSIDE THE BOARD - BOUNDARY CONDITION 1
    if (botLeft[0] === 0 && botLeft[1] !== 9) {
      //-----IF BOT LEFT AVAILABLE PIECE NEEDS TO BE HIGHLIGHTED-----//
      addClassHighlight(botLeft[0], botLeft[1], $square);
    }
    //-----CHECK IF BOT RIGHT SQUARE IS OUTSIDE THE BOARD - BOUNDARY CONDITION 2-----//
    if (botRight[0] !== 9 && botRight[1] !== 9) {
      //-----IF BOT RIGHT AVAILABLE PIECE NEEDS TO BE HIGHLIGHTED-----//
      addClassHighlight(botRight[0], botRight[1], $square);
    }
  } else if (squareData.playerId === 1) {
    // HANDLE THIS CASE BRUH!
  }
};

//-----HIGHLIGHT ALL PIECES FOR PLAYER TURN THAT CAN MAKE A MOVE-----//
const findSquaresWithPieces = () => {
  //-----ITERATE THROUGH ALL SQUARES-----//
  for (const square of $squares) {
    //-----CONVERT SQUARE INTO JQUERY OBJECT-----//
    $square = $(square);
    //-----GET SQUARE DATA OBJECT FROM SQUARE DIV-----//
    const squareData = $square.data(`squareData`);
    //-----IDENTIFY ALL SQUARES WITH PIECES ON THEM-----//
    if (squareData.hasPiece) {
      //-----CHECK IF ITS PLAYER 1 TURN-----//
      if (player0Turn) {
        //-----IDENTIFY ALL SQUARES WITH PLAYER 1 PIECES ON THEM-----//
        findPlayerPieces(squareData);
      }
    }
  }
};
