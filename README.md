# Checkers App (1-week long project)

2 Player Checker Game

https://ashwanth1109.github.io/CheckersApp/

# CORE CODE - ALGO AND LOGIC

### 1. Classes Used -

For this game, 3 classes were used - square, checker and diagonal

#### Square

A square has the following properties -

(1) Row - ranging from 1 to 8

(2) Column - ranging from 1 to 8

(3) TopLeft, TopRight, BotLeft BotRight values - that could help these squares for each square object

(4) hasPiece - set to true if there is a checker piece on the square

```javascript
//-----SQUARE CLASS-----//

class Square {
  constructor(rowPosition, columnPosition) {
    this.row = rowPosition;
    this.column = columnPosition;

    this.topLeftArray = [rowPosition - 1, columnPosition - 1];
    this.topRightArray = [rowPosition - 1, columnPosition + 1];
    this.botLeftArray = [rowPosition + 1, columnPosition - 1];
    this.botRightArray = [rowPosition + 1, columnPosition + 1];

    this.topLeft = this.convertToValue(
      this.topLeftArray[0],
      this.topLeftArray[1]
    );

    this.topRight = this.convertToValue(
      this.topRightArray[0],
      this.topRightArray[1]
    );

    this.botLeft = this.convertToValue(
      this.botLeftArray[0],
      this.botLeftArray[1]
    );

    this.botRight = this.convertToValue(
      this.botRightArray[0],
      this.botRightArray[1]
    );

    this.value = this.convertToValue(this.row, this.column);

    this.hasPiece = false;
  }

  convertToValue(row, column) {
    if (row === 0 || row === 9 || column === 0 || column === 9) {
      return null;
    }
    return (row - 1) * 8 + column - 1;
  }
}
```

#### Checker

A checker has the following properties -

(1) playerId = set to 1 if checker belongs to player 1 (black) and 2 if it belongs to player 2 (red)

(2) isItKing - set to true if checker reaches the end of the board and becomes a king piece

(3) diagonals array - which will store the 4 diagonal objects (TL, TR, BL, BR) of each checker for that turn

```javascript
//-----Checker CLASS-----//
class Checker {
  constructor(playerId) {
    this.playerId = playerId;
    this.isItKing = false;
    this.diagonals = [];
  }
}
```

#### Diagonal

Each diagonal object will have the following properties -

(1) movePosition - One square away in that diagonal direction (e.g. Top Left square)

(2) jumpPosition - Two squares away in the same diagonal direction (e.g. Square to the Top Left of the Top Left Square)

(3) opponentChecker - stores the checker object if there is one on the movePosition square

```javascript
// Diagonal Class

class Diagonal {
  constructor() {
    this.movePosition = null;
    this.jumpPosition = null;
    this.opponentChecker = null;
  }
}
```

### 2. Creating the Board - createBoard()

We use nested for loops to iterate from 1 to 8 (or gameSize) and create 64 squares which we append to the game board.
Each square also has a data attribute which stores the square object created from the square class.
Alternating squares are provided classes 'light' and 'dark' to create the checker pattern.
We then add all the checkers in their starting positions by invoking addCheckers()

```javascript
const createBoard = () => {
  for (let i = 1; i <= gameSize; i++) {
    const $row = $(`<div class="row">`).appendTo($gameBoard);

    for (let j = 1; j <= gameSize; j++) {
      const $square = $(`<div class="square">`).appendTo($row);
      const data = new Square(i, j);
      $square.data(`data`, data);

      if (!((i + j) % 2)) {
        $square.addClass(`dark`);
        if (i < 4) {
          addCheckers($square, 2);
        } else if (i > 5) {
          addCheckers($square, 1);
        }
      } else {
        $square.addClass(`light`);
      }
    }
  }
};
```

### 3. Adding checkers to the Board - addCheckers()

We create a checker div of class player and add it to squares.
Each checker also stores a data attribute for checker objects from checker class.
Let the square know that it has a piece now.
if playerId for checker is 1, then we add class black and if its 2, then we add class red.

```javascript
const addCheckers = ($square, playerId) => {
  const $checker = $(`<div class="player">`).appendTo($square);
  const data = new Checker(playerId);
  $checker.data(`data`, data);

  $square.data(`data`).hasPiece = true;

  if (playerId === 1) {
    $checker.addClass(`black`);
  } else if (playerId === 2) {
    $checker.addClass(`red`);
  }
};
```

### 4. Get all checkers for current player - getPlayerPieces()

First we get all checkers for current player - 1 or 2

```javascript
const getPlayerPieces = () => {
  const $checkers = $(`.player`);

  if (currentPlayer === 1) {
    return $checkers.filter($(`.black`));
  } else if (currentPlayer === 2) {
    return $checkers.filter($(`.red`));
  }
};
```

### 5. Checking for moves available for current player - checkForMovesAvailable()

Then we check for all the moves that are available for the checkers of current player.
To do this we iterate through all the current player checkers and check if its king or not.

If king, then check for all diagonals else check for forward diagonals

```javascript
const checkForMovesAvailable = $checkers => {
  for (const checker of $checkers) {
    if ($(checker).data(`data`).isItKing) {
      checkForAllDiagonals($(checker));
    } else {
      checkForForwardDiagonals($(checker));
    }
  }
};
```

### 6. Checking for forward diagonals - checkForForwardDiagonals()

We first get checkers parent square data, and then we check if we can make a move by invoking the
checkForMoveSquare().

If player 1, then top left and top right are its forward diagonals.
For player 2, then bot left and bot right are its forward diagonals

```javascript
const checkForForwardDiagonals = $checker => {
  const squareData = $checker.parent().data(`data`);

  if (currentPlayer === 1) {
    const topLeftData = $squares.eq(squareData.topLeft).data(`data`);
    checkForMoveSquare(
      // checking for top left diagonal
      squareData.topLeft, // move square value
      topLeftData.topLeft, // jump square value
      $checker // checker div
    );
    const topRightData = $squares.eq(squareData.topRight).data(`data`);
    checkForMoveSquare(squareData.topRight, topRightData.topRight, $checker);
  } else if (currentPlayer === 2) {
    const botLeftData = $squares.eq(squareData.botLeft).data(`data`);
    checkForMoveSquare(squareData.botLeft, botLeftData.botLeft, $checker);
    const botRightData = $squares.eq(squareData.botRight).data(`data`);
    checkForMoveSquare(squareData.botRight, botRightData.botRight, $checker);
  }
};
```

### 7. Check if we can make a move - checkForMoveSquare()

We get diagonal and jump diagonal squares as params along with checker.
We create a diagonal object. We store diagonal square and jumpDiagonal square if they are inside the board in $diagonal and $jumpDiagonal.

If diagonal has a piece which is an opponent piece and jump diagonal has no piece, then we store the jump diagonal
square and the opponent checker of the diagonal square inside the diagonal object which is stored inside the diagonals array of the current checker. Add highlight to checker since there is a move available.

If diagonal has no piece, then we store the diagonal square inside the diagonal object as move square. Add highlight to checker since there is a move available.

```javascript
const checkForMoveSquare = (
  diagonal, // move square value
  jumpDiagonal, // jump square value
  $checker
) => {
  let $diagonal = null,
    $jumpDiagonal = null;
  if (diagonal) {
    $diagonal = $squares.eq(diagonal); // stores the move square div
  }
  if (jumpDiagonal) {
    $jumpDiagonal = $squares.eq(jumpDiagonal); // stores the jump square div
  }
  const diagonalObject = new Diagonal();
  if ($diagonal !== null) {
    if ($diagonal.data(`data`).hasPiece) {
      if ($jumpDiagonal !== null) {
        if ($diagonal.children().data(`data`).playerId !== currentPlayer) {
          if ($jumpDiagonal.data(`data`).hasPiece === false) {
            diagonalObject.jumpPosition = $jumpDiagonal;
            diagonalObject.opponentChecker = $diagonal.children(); // store the checker object
            addHighlightToChecker($checker);
          }
        }
      }
    } else {
      diagonalObject.movePosition = $diagonal;
      addHighlightToChecker($checker);
    }
  }
  $checker.data(`data`).diagonals.push(diagonalObject); // store the diagonal object in your checker
};
```

### 8. Add highlight class to all checkers that can make a move - addHighlightToChecker()

Check if checker already has the class highlight checker. If not then, add the class highlight Checker.

Also add a click handler to the checker that was highlighted.

```javascript
const addHighlightToChecker = $checker => {
  if (!$checker.hasClass(`highlightChecker`)) {
    $checker.addClass(`highlightChecker`);
    clickHandlerToHighlightedChecker($checker);
  }
};
```

### 9. Adding a click handler to the highlighted checkers - clickHandlerToHighlightedChecker()

On clicking a highlighted checker, we add selected class to indicate that a checker has been selected.
Iterate through all diagonals that exist for checker (as these are all diagonals for which checker can move),

If diagonal has a jump position, highlight jump square and make it clickable by adding clickHandlerToHighlightSquare().

Else if diagonal has a move position, highlight move square and make it clickable by adding clickHandlerToHighlightSquare().

```javascript
const clickHandlerToHighlightedChecker = $checker => {
  $checker.on(`click`, e => {
    e.stopPropagation();
    resetHighlightSquares();
    addSelectedToChecker($checker);
    for (const diagonal of $checker.data(`data`).diagonals) {
      if (diagonal.jumpPosition) {
        addHighlightToSquare(diagonal.jumpPosition);
        clickHandlerToHighlightSquare(
          $checker.parent(), // current square
          diagonal.jumpPosition, // jump square
          $checker, // checker
          diagonal.opponentChecker // opponent piece to capture
        );
      } else if (diagonal.movePosition) {
        addHighlightToSquare(diagonal.movePosition);
        clickHandlerToHighlightSquare(
          $checker.parent(), // current square
          diagonal.movePosition, // move square
          $checker, // checker
          null
        );
      }
    }
  });
};
```
