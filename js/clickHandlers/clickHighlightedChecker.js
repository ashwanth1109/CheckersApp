const clickHighlightedChecker = event => {
  // console.log(`clicking highlighted checker`);
  $(`.highlightSquare`)
    .removeClass(`highlightSquare`)
    .addClass(`dark`);

  // REMOVE OFF CLICK LISTENERS FROM ALL SQUARES
  $(`.dark`).off(`click`);

  const $checker = $(event.currentTarget);
  const $currentSquare = $checker.parent();

  const $jumpSquare1 = $checker.data(`data`).movePositions[0];
  const $jumpSquare2 = $checker.data(`data`).movePositions[1];

  if ($jumpSquare1) {
    addHighlightToSquare($jumpSquare1);
    $jumpSquare1.on(`click`, () => {
      const currentSquareData = $currentSquare.data(`data`);
      currentSquareData.hasPiece = false;
      $currentSquare.data(`data`, currentSquareData);
      $checker.appendTo($jumpSquare1);
      const jumpSquare1Data = $jumpSquare1.data(`data`);
      jumpSquare1Data.hasPiece = true;
      $jumpSquare1.data(`data`, jumpSquare1Data);
      $jumpSquare1.removeClass(`highlightSquare`).addClass(`dark`);
      $jumpSquare1.off(`click`);
      if ($jumpSquare2) {
        $jumpSquare2.removeClass(`highlightSquare`).addClass(`dark`);
        $jumpSquare2.off(`click`);
      }
      $checker.data(`data`).movePositions = [];
      changePlayerTurn();
    });
  }
  if ($jumpSquare2) {
    addHighlightToSquare($jumpSquare2);
    $jumpSquare2.on(`click`, () => {
      const currentSquareData = $currentSquare.data(`data`);
      currentSquareData.hasPiece = false;
      $currentSquare.data(`data`, currentSquareData);
      $checker.appendTo($jumpSquare2);
      const jumpSquare2Data = $jumpSquare2.data(`data`);
      jumpSquare2Data.hasPiece = true;
      $jumpSquare2.data(`data`, jumpSquare2Data);
      $jumpSquare2.removeClass(`highlightSquare`).addClass(`dark`);
      $jumpSquare2.off(`click`);
      if ($jumpSquare1) {
        $jumpSquare1.removeClass(`highlightSquare`).addClass(`dark`);
        $jumpSquare1.off(`click`);
      }
      $checker.data(`data`).movePositions = [];
      changePlayerTurn();
    });
  }
};
