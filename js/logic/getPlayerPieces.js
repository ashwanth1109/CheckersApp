const getPlayerPieces = () => {
  //------------------------------------------------------------------------------------
  // Get all player pieces
  //------------------------------------------------------------------------------------
  const $checkers = $(`.player`);
  if (currentPlayer === 1) {
    const $playerPieces = $checkers.filter($(`.black`));
    return $playerPieces;
  } else if (currentPlayer === 2) {
    const $playerPieces = $checkers.filter($(`.red`));
    return $playerPieces;
  }
  // console.log($playerPieces);
};
