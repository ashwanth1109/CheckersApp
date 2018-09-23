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
