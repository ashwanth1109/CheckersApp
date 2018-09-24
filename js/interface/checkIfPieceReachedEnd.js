const checkIfPieceReachedEnd = () => {
  console.log(`==========Changing Player==========`);
  const $player1Pieces = $(`.player1`);
  for (const player1 of $player1Pieces) {
    const $player1 = $(player1);
    console.log($player1.parent().data(`squareData`));
  }
};
