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
  const $opponentChecker1 = $checker.data(`data`).checkersThatCanBeCaptured[0];
  const $jumpSquare2 = $checker.data(`data`).jumpPositions[1];
  const $opponentChecker2 = $checker.data(`data`).checkersThatCanBeCaptured[1];

  const $moveSquare1 = $checker.data(`data`).movePositions[0];
  const $moveSquare2 = $checker.data(`data`).movePositions[1];

  if ($jumpSquare1 || $jumpSquare2) {
    if ($jumpSquare1) {
      addHighlightToSquare($jumpSquare1);
      $jumpSquare1.on(`click`, () => {
        const currentSquareData = $currentSquare.data(`data`);
        currentSquareData.hasPiece = false;
        $currentSquare.data(`data`, currentSquareData);
        $checker.appendTo($jumpSquare1);
        //------------------------------------------------------------------------------------
        // // Capture opponent checker with your checker
        //------------------------------------------------------------------------------------
        $opponentChecker1.parent().data(`data`).hasPiece = false;
        $opponentChecker1.remove();
        const jumpSquare1Data = $jumpSquare1.data(`data`);
        jumpSquare1Data.hasPiece = true;
        $jumpSquare1.data(`data`, jumpSquare1Data);
        $jumpSquare1.removeClass(`highlightSquare`).addClass(`dark`);
        $jumpSquare1.off(`click`);
        if ($jumpSquare2) {
          $jumpSquare2.removeClass(`highlightSquare`).addClass(`dark`);
          $jumpSquare2.off(`click`);
        }
        $checker.data(`data`).jumpPositions = [];
        $checker.data(`data`).checkersThatCanBeCaptured = [];
        //------------------------------------------------------------------------------------
        // Check if checker can jump one more time: Handle this case here bruh!
        //------------------------------------------------------------------------------------
        changePlayerTurn();
      });
    }
    //------------------------------------------------------------------------------------
    // Set on click for jump square 2 if it exists
    //------------------------------------------------------------------------------------
    if ($jumpSquare2) {
      addHighlightToSquare($jumpSquare2);
      $jumpSquare2.on(`click`, () => {
        const currentSquareData = $currentSquare.data(`data`);
        currentSquareData.hasPiece = false;
        $currentSquare.data(`data`, currentSquareData);
        $checker.appendTo($jumpSquare2);
        //------------------------------------------------------------------------------------
        // Need to capture opponent checker with your checker
        //------------------------------------------------------------------------------------
        $opponentChecker2.parent().data(`data`).hasPiece = false;
        $opponentChecker2.remove();
        const jumpSquare2Data = $jumpSquare2.data(`data`);
        jumpSquare2Data.hasPiece = true;
        $jumpSquare2.data(`data`, jumpSquare2Data);
        $jumpSquare2.removeClass(`highlightSquare`).addClass(`dark`);
        $jumpSquare2.off(`click`);
        if ($jumpSquare1) {
          $jumpSquare1.removeClass(`highlightSquare`).addClass(`dark`);
          $jumpSquare1.off(`click`);
        }
        $checker.data(`data`).jumpPositions = [];
        $checker.data(`data`).checkersThatCanBeCaptured = [];
        //------------------------------------------------------------------------------------
        // Need to check if checker can jump one more and handle this case
        //------------------------------------------------------------------------------------
      });
    }
  } else if ($moveSquare1 || $moveSquare2) {
    if ($moveSquare1) {
      addHighlightToSquare($moveSquare1);
      $moveSquare1.on(`click`, () => {
        const currentSquareData = $currentSquare.data(`data`);
        currentSquareData.hasPiece = false;
        $currentSquare.data(`data`, currentSquareData);
        $checker.appendTo($moveSquare1);
        const moveSquare1Data = $moveSquare1.data(`data`);
        moveSquare1Data.hasPiece = true;
        $moveSquare1.data(`data`, moveSquare1Data);
        $moveSquare1.removeClass(`highlightSquare`).addClass(`dark`);
        $moveSquare1.off(`click`);
        if ($moveSquare2) {
          $moveSquare2.removeClass(`highlightSquare`).addClass(`dark`);
          $moveSquare2.off(`click`);
        }
        $checker.data(`data`).movePositions = [];
        changePlayerTurn();
      });
    }
    if ($moveSquare2) {
      addHighlightToSquare($moveSquare2);
      $moveSquare2.on(`click`, () => {
        const currentSquareData = $currentSquare.data(`data`);
        currentSquareData.hasPiece = false;
        $currentSquare.data(`data`, currentSquareData);
        $checker.appendTo($moveSquare2);
        const moveSquare2Data = $moveSquare2.data(`data`);
        moveSquare2Data.hasPiece = true;
        $moveSquare2.data(`data`, moveSquare2Data);
        $moveSquare2.removeClass(`highlightSquare`).addClass(`dark`);
        $moveSquare2.off(`click`);
        if ($moveSquare1) {
          $moveSquare1.removeClass(`highlightSquare`).addClass(`dark`);
          $moveSquare1.off(`click`);
        }
        $checker.data(`data`).movePositions = [];
        changePlayerTurn();
      });
    }
  }
};
