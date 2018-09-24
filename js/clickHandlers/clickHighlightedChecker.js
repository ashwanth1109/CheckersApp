const clickHighlightedChecker = event => {
  // console.log(`clicking highlighted checker`);
  $(`.highlightSquare`)
    .removeClass(`highlightSquare`)
    .addClass(`dark`);

  // REMOVE OFF CLICK LISTENERS FROM ALL SQUARES
  $(`.dark`).off(`click`);

  const $checker = $(event.currentTarget);
  const $currentSquare = $checker.parent();

  const $jumpSquare1 = $checker.data(`data`).jumpPositions[0];
  const $jumpSquare2 = $checker.data(`data`).jumpPositions[1];

  if ($jumpSquare1) {
    addHighlightToSquare($jumpSquare1);
    $jumpSquare1.on(`click`, () => {
      $currentSquare.data(`data`).hasPiece = false;
      $checker.appendTo($jumpSquare1);
      $jumpSquare1.data(`data`).hasPiece = true;
      $jumpSquare1.removeClass(`highlightSquare`).addClass(`dark`);
      $jumpSquare1.off(`click`);
      if ($jumpSquare2) {
        $jumpSquare2.removeClass(`highlightSquare`).addClass(`dark`);
        $jumpSquare2.off(`click`);
      }
      $checker.data(`data`).jumpPositions = [];
      changePlayerTurn();
    });
  }
  if ($jumpSquare2) {
    addHighlightToSquare($jumpSquare2);
    $jumpSquare2.on(`click`, () => {
      $currentSquare.data(`data`).hasPiece = false;
      $checker.appendTo($jumpSquare2);
      $jumpSquare2.removeClass(`highlightSquare`).addClass(`dark`);
      $jumpSquare2.off(`click`);
      if ($jumpSquare1) {
        $jumpSquare1.removeClass(`highlightSquare`).addClass(`dark`);
        $jumpSquare1.off(`click`);
      }
      $checker.data(`data`).jumpPositions = [];
      changePlayerTurn();
    });
  }
};
