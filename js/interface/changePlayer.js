const changePlayer = () => {
  console.log(`Time to change the player`);

  // UNHIGHLIGHT ALL PIECES
  $(`.highlight`).removeClass(`highlight`);

  // CHANGE PLAYER TURN
  player0Turn = !player0Turn;

  findSquaresWithPieces();
};
