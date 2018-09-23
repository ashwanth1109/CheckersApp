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

const findPlayerPieces = (squareData, $square) => {
  //-----DEFINE VARIABLES DIAGONAL1, DIAGONAL2 AND BOUNDARY1-----//
  let diagonal1, diagonal2, boundary1;
  //-----IF PLAYER 1, DIAGONALS SHOULD BE BOT LEFT & BOT RIGHT AND BOUNDARY IS 9-----//
  if (squareData.playerId === 0) {
    diagonal1 = squareData.botLeft;
    diagonal2 = squareData.botRight;
    boundary1 = 9;
  }
  //-----IF PLAYER 2, DIAGONALS SHOULD BE TOP LEFT & TOP RIGHT AND BOUNDARY IS 0-----//
  else if (squareData.playerId === 1) {
    diagonal1 = squareData.topLeft;
    diagonal2 = squareData.topRight;
    boundary1 = 0;
  }
  //-----CHECK IF DIAGONAL1 PIECE FALLS WITHIN THE BOARD-----//
  if (diagonal1[0] !== boundary1 && diagonal1[1] !== 0) {
    //-----IF DIAGONAL1 IS IN BOARD, CALL FUNCTION TO ADD CLASS HIGHLIGHT-----//
    addClassHighlight(diagonal1[0], diagonal1[1], $square);
  }
  //-----CHECK IF DIAGONAL2 PIECE FALLS WITHIN THE BOARD-----//
  if (diagonal2[0] !== boundary1 && diagonal2[1] !== 9) {
    //-----IF DIAGONAL2 IS IN BOARD, CALL FUNCTION TO ADD CLASS HIGHLIGHT-----//
    addClassHighlight(diagonal2[0], diagonal2[1], $square);
  }
};

const findPlayer0Pieces = (squareData, $square) => {
  if (squareData.playerId === 0) {
    //-----GET ALL DIAGONAL POSITIONS THAT PLAYER 1 CAN MOVE-----//
    const botLeft = squareData.botLeft;
    const botRight = squareData.botRight;
    // CHECK IF BOT LEFT SQUARE IS OUTSIDE THE BOARD - BOUNDARY CONDITION 1
    if (botLeft[0] !== 9 && botLeft[1] !== 0) {
      //-----IF BOT LEFT AVAILABLE PIECE NEEDS TO BE HIGHLIGHTED-----//
      addClassHighlight(botLeft[0], botLeft[1], $square);
    }
    //-----CHECK IF BOT RIGHT SQUARE IS OUTSIDE THE BOARD - BOUNDARY CONDITION 2-----//
    if (botRight[0] !== 9 && botRight[1] !== 9) {
      //-----IF BOT RIGHT AVAILABLE PIECE NEEDS TO BE HIGHLIGHTED-----//
      addClassHighlight(botRight[0], botRight[1], $square);
    }
  }
};

const findPlayer1Pieces = (squareData, $square) => {
  if (squareData.playerId === 1) {
    const topLeft = squareData.topLeft;
    const topRight = squareData.topRight;

    if (topLeft[0] !== 0 && topLeft[1] !== 0) {
      addClassHighlight(topLeft[0], topLeft[1], $square);
    }
    if (topRight[0] !== 0 && topRight[1] !== 9) {
      addClassHighlight(topRight[0], topRight[1], $square);
    }
  }
};
