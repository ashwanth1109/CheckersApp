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
      // findPlayerPieces(squareData, $square);
      if (player0Turn) {
        //-----IDENTIFY ALL SQUARES WITH PLAYER 1 PIECES ON THEM-----//
        findPlayer0Pieces(squareData, $square);
      } else {
        findPlayer1Pieces(squareData, $square);
      }
    }
  }
};
