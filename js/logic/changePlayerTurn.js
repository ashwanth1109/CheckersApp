const changePlayerTurn = () => {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }

  $(`.highlightChecker`).removeClass(`highlightChecker`);

  checkForMovesAvailable();
};
