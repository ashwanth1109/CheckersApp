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
