const checkForForwardDiagonals = $checker => {
  // console.log(`checking for forward diagonals`);

  const $square = $checker.parent();
  const squareData = $square.data(`data`);
  // console.log($square.data(`data`));

  // PLAYER 1
  if (currentPlayer === 1) {
    // CHECK TOP LEFT SQUARE FIRST
    // CHECK FOR BOUNDARY CONDITIONS
    if (squareData.topLeftArray[0] === 0 || squareData.topLeftArray[1] === 0) {
      console.log(`top left square is out of bounds`);
    } else {
      console.log(squareData.topLeft);
      const $nextSquare = $squares.eq(squareData.topLeft);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
      } else {
        console.log($checker.data(`data`));
        $checker.data(`data`).jumpPositions.push($nextSquare);
        // Add class highlight to checker
        addHighlightToChecker($checker);
      }
      // if ($squares.eq(squareData.topLeft))
    }

    // CHECK TOP RIGHT SQUARE NEXT
    // CHECK FOR BOUNDARY CONDITIONS
    if (
      squareData.topRightArray[0] === 0 ||
      squareData.topRightArray[1] === gameSize + 1
    ) {
      console.log(`top right square is out of bounds`);
    } else {
      const $nextSquare = $squares.eq(squareData.topRight);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
      } else {
        $checker.data(`data`).jumpPositions.push($nextSquare);
        // Add class highlight to checker
        addHighlightToChecker($checker);
      }
    }
  } else if (currentPlayer === 2) {
    // CHECK BOT LEFT SQUARE FIRST
    // CHECK FOR BOUNDARY CONDITIONS
    if (
      squareData.botLeftArray[0] === gameSize + 1 ||
      squareData.botLeftArray[1] === 0
    ) {
      console.log(`bot left square is out of bounds`);
    } else {
      const $nextSquare = $squares.eq(squareData.botLeft);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
      } else {
        $checker.data(`data`).jumpPositions.push($nextSquare);
        // Add class highlight to checker
        addHighlightToChecker($checker);
      }
    }

    // CHECK BOT RIGHT SQUARE NEXT
    // CHECK FOR BOUNDARY CONDITIONS
    if (
      squareData.botRightArray[0] === gameSize + 1 ||
      squareData.botRightArray[1] === gameSize + 1
    ) {
      console.log(`bot right square is out of bounds`);
    } else {
      const $nextSquare = $squares.eq(squareData.botRight);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
      } else {
        $checker.data(`data`).jumpPositions.push($nextSquare);
        addHighlightToChecker($checker);
      }
    }
  }
};
