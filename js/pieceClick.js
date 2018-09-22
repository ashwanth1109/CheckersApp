const highlightNextMove = () => {
  console.log(`object`);
};

const pieceClick = event => {
  // console.log(`Piece was clicked`);
  // console.log(event.currentTarget);
  const $clickedPiece = $(event.currentTarget);
  // console.log($(event.currentTarget).hasClass(`highlight`));
  if ($clickedPiece.hasClass(`highlight`)) {
    // SHOW THAT PIECE IS CLICKED
    const $squares = $(`.highlight`);
    for (let i = 0; i < $squares.length; i++) {
      if ($squares.eq(i).hasClass(`selected`)) {
        $squares.eq(i).removeClass(`selected`);
      }
    }
    $clickedPiece.addClass(`selected`);

    // HIGHLIGHT ALL POSITIONS THAT YOU CAN MOVE TO
    if (player0Turn) {
      // console.log($clickedPiece.data(`squareData`));
      const botLeft = $clickedPiece.parent().data(`squareData`).botLeft;
      const botRight = $clickedPiece.parent().data(`squareData`).botRight;
      let $botLeftSquare, $botRightSquare;
      console.log(botLeft, botRight);
      if (botLeft[0] && botLeft[1]) {
        $botLeftSquare = $(`.square`).eq((botLeft[0] - 1) * 8 + botLeft[1] - 1);
        if (!$botLeftSquare.data(`squareData`).hasPiece) {
          $botLeftSquare.removeClass(`dark`).addClass(`darker`);
          $botLeftSquare.on(`click`, () => {
            $clickedPiece.removeClass(`selected`).appendTo($botLeftSquare);
            $botLeftSquare.removeClass(`darker`).addClass(`dark`);
            $botLeftSquare.off(`click`);
            $botRightSquare.removeClass(`darker`).addClass(`dark`);
            $botRightSquare.off(`click`);
          });
        }
      }
      if (botRight[0] !== 9 && botRight[1] !== 9) {
        $botRightSquare = $(`.square`).eq(
          (botRight[0] - 1) * 8 + botRight[1] - 1
        );
        // console.log($botRightSquare);
        if (!$botRightSquare.data(`squareData`).hasPiece) {
          $botRightSquare.removeClass(`dark`).addClass(`darker`);
          $botRightSquare.on(`click`, () => {
            $clickedPiece.removeClass(`selected`).appendTo($botRightSquare);
            $botRightSquare.removeClass(`darker`).addClass(`dark`);
            $botRightSquare.off(`click`);
            $botLeftSquare.removeClass(`darker`).addClass(`dark`);
            $botLeftSquare.off(`click`);
          });
        }
      }
    }
  }
};
