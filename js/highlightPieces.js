const highlightPieces = () => {
  const $squares = $(`.square`);
  // console.log($square);

  for (const square of $squares) {
    $square = $(square);
    // console.log($square.data(`squareData`).hasPiece);
    const squareData = $square.data(`squareData`);
    if (squareData.hasPiece) {
      // console.log(squareData);
      if (player1Turn) {
        // console.log(`something broke`);
        if (squareData.playerId === 0) {
          // Get all diagonal positions to check if piece can move
          const botLeft = $square.data(`squareData`).botLeft;
          const botRight = $square.data(`squareData`).botRight;

          if (botLeft[0] && botLeft[1]) {
            const botLeftSquare = $squares
              .eq((botLeft[0] - 1) * 8 + botLeft[1] - 1)
              .data(`squareData`);
            if (botLeftSquare.hasPiece === false) {
              // console.log($square.children());
              $square.children().addClass(`highlight`);
            }
          }

          if (botRight[0] !== 9 && botRight[1] !== 9) {
            const botRightSquare = $squares
              .eq((botRight[0] - 1) * 8 + botRight[1] - 1)
              .data(`squareData`);
            if (botRightSquare.hasPiece === false) {
              $square.children().addClass(`highlight`);
            }
          }
          // console.log(botLeft, botRight);
        }
      }
    }
  }
};
