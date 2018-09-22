const highlightPieces = () => {
  const $squares = $(`.square`);
  // console.log($square);

  for (const square of $squares) {
    $square = $(square);
    // console.log($square.data(`squareData`).hasPiece);
    const squareData = $square.data(`squareData`);
    if (squareData.hasPiece) {
      console.log(squareData);
      if (player1Turn) {
        console.log(`something broke`);
      }
    }
  }
};
