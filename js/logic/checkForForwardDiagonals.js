const checkIfOpponentPiece = ($nextSquare, $square, $jumpSquare) => {
  if ($nextSquare.children().data(`data`).playerId !== currentPlayer) {
    // console.log(`Opponent piece encountered`);
    // Check if jump square has a piece
    if ($jumpSquare.data(`data`).hasPiece === false) {
      $square
        .children()
        .data(`data`)
        .checkersThatCanBeCaptured.push($nextSquare.children());

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
    if (squareData.topLeft === null) {
      // console.log(`Top Left of square is out of bounds`);
    } else {
      const $nextSquare = $squares.eq(squareData.topLeft);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).topLeft);
        if ($jumpSquare.data(`data`).topLeft === null) {
          // console.log(`Top Left of next square is out of bounds`);
        } else {
          checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
        }
      } else {
        $checker.data(`data`).movePositions[0] = $nextSquare;
        addHighlightToChecker($checker);
      }
    }

    // CHECK TOP RIGHT SQUARE NEXT
    // CHECK FOR BOUNDARY CONDITIONS
    if (squareData.topRight === null) {
      // console.log(`Top right of square is out of bounds`);
    } else {
      const $nextSquare = $squares.eq(squareData.topRight);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).topRight);
        if ($jumpSquare.data(`data`).topRight === null) {
          // console.log(`Top right of square is out of bounds`);
        } else {
          checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
        }
      } else {
        $checker.data(`data`).movePositions[1] = $nextSquare;
        addHighlightToChecker($checker);
      }
    }
  } else if (currentPlayer === 2) {
    // CHECK BOT LEFT SQUARE FIRST
    // CHECK FOR BOUNDARY CONDITIONS
    if (squareData.botLeft === null) {
      // console.log(`Bot Left of square is out of bounds`);
    } else {
      const $nextSquare = $squares.eq(squareData.botLeft);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).botLeft);
        if ($jumpSquare.data(`data`).botLeft === null) {
          // console.log(`Bot Left of next square is out of bounds`);
        } else {
          checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
        }
      } else {
        $checker.data(`data`).movePositions[0] = $nextSquare;
        addHighlightToChecker($checker);
      }
    }

    // CHECK BOT RIGHT SQUARE NEXT
    // CHECK FOR BOUNDARY CONDITIONS
    if (squareData.botRight === null) {
      // console.log(`Bot right of square is out of bounds`);
    } else {
      const $nextSquare = $squares.eq(squareData.botRight);
      if ($nextSquare.data(`data`).hasPiece) {
        // Check if its an opponent piece
        const $jumpSquare = $squares.eq($nextSquare.data(`data`).botRight);
        if ($jumpSquare.data(`data`).botRight === null) {
          // console.log(`Bot right of next square is out of bounds`);
        } else {
          checkIfOpponentPiece($nextSquare, $square, $jumpSquare);
        }
      } else {
        $checker.data(`data`).movePositions[1] = $nextSquare;
        addHighlightToChecker($checker);
      }
    }
  }
};
