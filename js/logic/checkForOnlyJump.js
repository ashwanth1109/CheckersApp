const checkForOnlyJump = (diagonal, jumpDiagonal, $checker) => {
  if (
    diagonal &&
    jumpDiagonal &&
    $squares.eq(diagonal).data(`data`).hasPiece &&
    $squares
      .eq(diagonal)
      .children()
      .data(`data`).playerId !== currentPlayer &&
    !$squares.eq(jumpDiagonal).data(`data`).hasPiece
  ) {
    addHighlightToSquare($squares.eq(jumpDiagonal));
    clickHandlerToHighlightSquare(
      $checker.parent(),
      $squares.eq(jumpDiagonal),
      $checker,
      $squares.eq(diagonal).children()
    );
    return true;
  } else {
    return false;
  }
};
