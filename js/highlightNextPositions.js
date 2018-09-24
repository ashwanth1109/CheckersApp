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
    const $botLeft = $(`.square`)
      .eq((botLeft[0] - 1) * 8 + botLeft[1] - 1)
      .eq(0);
    //-----GET BOT RIGHT SQUARE-----//
    const $botRight = $(`.square`)
      .eq((botRight[0] - 1) * 8 + botRight[1] - 1)
      .eq(0);
    //-----RESET ALL DARKER ELEMENTS-----//
    $(`.darker`)
      .removeClass(`darker`)
      .addClass(`dark`)
      .off(`click`);
    //-----CHECK IF BOT LEFT IS INSIDE THE BOARD-----//
    if (botLeft[0] !== 9 && botLeft[1] !== 0) {
      // Maybe refactor above if condition to add diagonal existence to class?
      //-----CHECK WHETHER TO HIGHLIGHT BOT LEFT-----//
      highlightSquare(
        $botLeft,
        $botRight,
        $clickedPiece,
        1,
        $botLeft.data(`squareData`).botLeft
      );
    }
    if (botRight[0] !== 9 && botRight[1] !== 9) {
      //-----CHECK WHETHER TO HIGHLIGHT BOT RIGHT-----//
      highlightSquare(
        $botRight,
        $botLeft,
        $clickedPiece,
        1,
        $botRight.data(`squareData`).botRight
      );
    }
  }
  //-----ELSE ITS PLAYER 1 TURN-----//
  else {
    //-----GET SQUARE DATA OF CLICKED PIECE-----//
    const squareData = $clickedPiece.parent().data(`squareData`);
    //-----BOT LEFT AND BOT RIGHT ARRAYS-----//
    const topLeft = squareData.topLeft;
    const topRight = squareData.topRight;
    //-----CREATE VARIABLES FOR STORING BOT LEFT & RIGHT SQUARES-----//
    //-----GET TOP LEFT SQUARE-----//
    const $topLeft = $(`.square`)
      .eq((topLeft[0] - 1) * 8 + topLeft[1] - 1)
      .eq(0);
    //-----GET BOT RIGHT SQUARE-----//
    const $topRight = $(`.square`)
      .eq((topRight[0] - 1) * 8 + topRight[1] - 1)
      .eq(0);
    //-----RESET ALL DARKER ELEMENTS-----//
    $(`.darker`)
      .removeClass(`darker`)
      .addClass(`dark`)
      .off(`click`);
    //-----CHECK IF BOT LEFT IS INSIDE THE BOARD-----//
    if (topLeft[0] !== 0 && topLeft[1] !== 0) {
      // Maybe refactor above if condition to add diagonal existence to class?
      console.log(topLeft[0], topLeft[1]);
      //-----CHECK WHETHER TO HIGHLIGHT TOP LEFT-----//
      highlightSquare(
        $topLeft,
        $topRight,
        $clickedPiece,
        0,
        $topLeft.data(`squareData`).topLeft
      );
    }
    if (topRight[0] !== 0 && topRight[1] !== 9) {
      //-----CHECK WHETHER TO HIGHLIGHT TOP RIGHT-----//
      highlightSquare(
        $topRight,
        $topLeft,
        $clickedPiece,
        0,
        $topRight.data(`squareData`).topRight
      );
    }
  }
};
