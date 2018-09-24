//-----HIGHLIGHT SQUARE -----//
const highlightSquare = (
  $square,
  $otherSquare,
  $clickedPiece,
  opponentPlayerId,
  jumpPosition
) => {
  //-----CHECK IF SQUARE HAS PIECE OR NOT-----//
  if (!$square.data(`squareData`).hasPiece) {
    //-----IF SQUARE HAS NO PIECE, PLAYER CAN MOVE-----//
    //-----REMOVE CLASS DARK AND DARKER TO HIGHTEN IT-----//
    $square.removeClass(`dark`).addClass(`darker`);
    //-----ADD ON CLICK HANDLER TO SQUARES THAT ARE DARKENED-----//
    $square.on(`click`, () => {
      //-----ON CLICK USER HAS CHOSEN TO MAKE A MOVE-----//
      //-----UNSELECT THE PLAYER PIECE AND MOVE IT TO NEXT SQUARE-----//
      const initialSquareData = $clickedPiece.parent().data(`squareData`);
      initialSquareData.hasPiece = false;
      const playerId = initialSquareData.playerId;
      initialSquareData.playerId = null;
      $clickedPiece.parent().data(`squareData`, initialSquareData);
      $clickedPiece.removeClass(`selected`).appendTo($square);
      const finalSquareData = $clickedPiece.parent().data(`squareData`);
      finalSquareData.hasPiece = true;
      finalSquareData.playerId = playerId;
      $clickedPiece.parent().data(`squareData`, finalSquareData);
      //-----UNDARKEN THE NEXT SQUARE THAT USER HAS CLICKED-----//
      $square.removeClass(`darker`).addClass(`dark`);
      //-----REMOVE CLICK LISTENER FROM NEXT SQUARE-----//
      $square.off(`click`);
      //-----UNDARKEN THE OTHER NEXT SQUARE-----//
      $otherSquare.removeClass(`darker`).addClass(`dark`);
      //-----REMOVE CLICK LISTENER FROM OTHER NEXT SQUARE-----//
      $otherSquare.off(`click`);

      // MOVE HAS BEEN MADE
      // TIME TO CHANGE PLAYER TURN
      changePlayer();
    });
  }
  //-----HANDLE CASE WHERE THERE IS ENEMY PIECE AND YOU CAN ATTACK-----//
  else if ($square.data(`squareData`).playerId === opponentPlayerId) {
    const immediateNextSquareData = $square.data(`squareData`);
    console.log(`Enemy piece encountered`);
    console.log(`Need to jump to ${jumpPosition} if you can`);
    const $jumpSquare = $(`.square`).eq(
      (jumpPosition[0] - 1) * 8 + jumpPosition[1] - 1
    );
    //-----CHECK IF JUMP SQUARE HAS A PIECE-----//
    if (!$jumpSquare.data(`squareData`).hasPiece) {
      console.log(`Jump square is empty. Current piece can jump here`);
      $jumpSquare.removeClass(`dark`).addClass(`darker`);
      $jumpSquare.on(`click`, () => {
        const initialSquareData = $clickedPiece.parent().data(`squareData`);
        initialSquareData.hasPiece = false;
        const playerId = initialSquareData.playerId;
        initialSquareData.playerId = null;
        $clickedPiece.parent().data(`squareData`, initialSquareData);
        $clickedPiece.removeClass(`selected`).appendTo($jumpSquare);
        const finalSquareData = $jumpSquare.data(`squareData`);
        finalSquareData.hasPiece = true;
        finalSquareData.playerId = playerId;
        $jumpSquare.data(`squareData`, finalSquareData);
        // UNHIGHLIGHT SQUARES
        $jumpSquare.removeClass(`darker`).addClass(`dark`);
        $jumpSquare.off(`click`);
        $otherSquare.removeClass(`darker`).addClass(`dark`);
        $otherSquare.off(`click`);
        // REMOVE PIECE THAT GOT CUT
        $square.children().remove();
        // NEED TO UPDATE THE SCORE
        changePlayer();
      });
    }
  }
};
