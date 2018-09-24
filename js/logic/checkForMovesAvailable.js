const checkForMovesAvailable = () => {
  console.log(`checking for moves available`);

  const $checkers = getPlayerPieces();

  for (const checker of $checkers) {
    // console.log($(checker).data(`data`));
    const $checker = $(checker);
    if ($checker.data(`data`).isItKing) {
      checkForAllDiagonals($checker);
    } else {
      checkForForwardDiagonals($checker);
    }
    // console.log($checker.data(`data`).isItKing);
  }
};
