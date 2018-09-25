const checkIfOpponentPiece = ($nextSquare, $square, $jumpSquare) => {
  if ($nextSquare.children().data(`data`).playerId !== currentPlayer) {
    // console.log(`Opponent piece encountered`);
    // Check if jump square has a piece
    if ($jumpSquare.data(`data`).hasPiece === false) {
      // jump
      console.log($square.children().data(`data`));
      // $square.children()
      $square
        .children()
        .data(`data`)
        .jumpPositions.push($jumpSquare);
      addHighlightToChecker($square.children());
    }
  }
};

const checkForForwardDiagonals = $checker => {
  const $square = $checker.parent();
  const squareData = $square.data(`data`);

  // PLAYER 1
  if (currentPlayer === 1) {
    // CHECK TOP LEFT SQUARE FIRST
    // CHECK FOR BOUNDARY CONDITIONS
    if (squareData.topLeftArray[0] === 0 || squareData.topLeftArray[1] === 0) {
      // OUT OF BOUNDS
    } else {
      const $nextSquare = $squares.eq(squareData.topLeft);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).topLeft);
        checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
      } else {
        $checker.data(`data`).movePositions[0] = $nextSquare;
        addHighlightToChecker($checker);
      }
    }

    // CHECK TOP RIGHT SQUARE NEXT
    // CHECK FOR BOUNDARY CONDITIONS
    if (
      squareData.topRightArray[0] === 0 ||
      squareData.topRightArray[1] === gameSize + 1
    ) {
      // OUT OF BOUNDS
    } else {
      const $nextSquare = $squares.eq(squareData.topRight);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).topRight);
        checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
      } else {
        $checker.data(`data`).movePositions[1] = $nextSquare;
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
      // OUT OF BOUNDS
    } else {
      const $nextSquare = $squares.eq(squareData.botLeft);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).botLeft);
        checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
      } else {
        $checker.data(`data`).movePositions[0] = $nextSquare;
        addHighlightToChecker($checker);
      }
    }

    // CHECK BOT RIGHT SQUARE NEXT
    // CHECK FOR BOUNDARY CONDITIONS
    if (
      squareData.botRightArray[0] === gameSize + 1 ||
      squareData.botRightArray[1] === gameSize + 1
    ) {
      // OUT OF BOUNDS
    } else {
      const $nextSquare = $squares.eq(squareData.botRight);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).botRight);
        checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
      } else {
        $checker.data(`data`).movePositions[1] = $nextSquare;
        addHighlightToChecker($checker);
      }
    }
  }
};
