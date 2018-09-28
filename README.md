# Checkers App (1-week long project)

2 Player Checker Game

https://ashwanth1109.github.io/CheckersApp/

# CORE CODE - ALGO AND LOGIC

### 1. Creating the classes -

For this game, 3 classes were used - square, checker and diagonal

#### Square

A square has the following properties -

(1) Row - ranging from 1 to 8

(2) Column - ranging from 1 to 8

(3) TopLeft, TopRight, BotLeft BotRight values - that could help these squares for each square object

(4) hasPiece - set to true if there is a checker piece on the square

```javascript
class Square {
  constructor(rowPosition, columnPosition, gameSize) {
    this.row = rowPosition;
    this.column = columnPosition;
    this.topLeftArray = [rowPosition - 1, columnPosition - 1];
    this.topRightArray = [rowPosition - 1, columnPosition + 1];
    this.botLeftArray = [rowPosition + 1, columnPosition - 1];
    this.botRightArray = [rowPosition + 1, columnPosition + 1];
    this.topLeft = this.convertToValue(
      this.topLeftArray[0],
      this.topLeftArray[1],
      gameSize
    );
    this.topRight = this.convertToValue(
      this.topRightArray[0],
      this.topRightArray[1],
      gameSize
    );
    this.botLeft = this.convertToValue(
      this.botLeftArray[0],
      this.botLeftArray[1],
      gameSize
    );
    this.botRight = this.convertToValue(
      this.botRightArray[0],
      this.botRightArray[1],
      gameSize
    );
    this.value = this.convertToValue(this.row, this.column, gameSize);
    this.hasPiece = false;
  }

  convertToValue(row, column, gameSize) {
    if (
      row === 0 ||
      row === gameSize + 1 ||
      column === 0 ||
      column === gameSize + 1
    ) {
      return null;
    }
    return (row - 1) * gameSize + column - 1;
  }
}
```

#### Checker

A checker has the following properties -

(1) playerId = set to 1 if checker belongs to player 1 (black) and 2 if it belongs to player 2 (red)

(2) isItKing - set to true if checker reaches the end of the board and becomes a king piece

(3) diagonals array - which will store the 4 diagonal objects (TL, TR, BL, BR) of each checker for that turn

```javascript
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
class Diagonal {
  constructor() {
    this.movePosition = null;
    this.jumpPosition = null;
    this.opponentChecker = null;
  }
}
```

### 2. Starting a new game - startNewGame()

Start a new game is called initially and on reaching game over condition and clicking the new game button.

So, first we check if game-over container is displaying and we hide it if it is.
Then we rotate the board to starting position if it was flipped on starting the game.

Next, we remove the previous board and we create a new board by invoking createBoard()

We reset current player to 1, reset the scores and then start the turn by invoking startTurn()

```javascript
const startNewGame = () => {
  if ($(`#game-over-container`).css(`display`) === `flex`) {
    $(`#game-over-container`).css(`display`, `none`);
  }

  if ($gameBoard.hasClass(`rotate-board-1`)) {
    $gameBoard.removeClass(`rotate-board-1`).removeClass(`board-state-1`);
    $gameBoard.addClass(`rotate-board-2`).addClass(`board-state-2`);
  }

  $gameBoard.children().remove();
  createBoard();

  currentPlayer = 1;
  blackScore = 0;
  $(`#black-score`).text(blackScore);
  redScore = 0;
  $(`#red-score`).text(redScore);

  startTurn();
};
```

### 3A. Creating the Board - createBoard()

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
      $(`<div class="horizontal-border">`).appendTo($row);
      const data = new Square(i, j, gameSize);
      $square.data(`data`, data);
      if (!((i + j) % 2)) {
        $square.addClass(`dark`);
        if (i < gameSize / 2) {
          addCheckers($square, 2);
        } else if (i > gameSize / 2 + 1) {
          addCheckers($square, 1);
        }
      } else {
        $square.addClass(`light`);
      }
    }
    $(`<div class="vertical-border">`).appendTo($gameBoard);
  }
};
```

### 3B. Adding checkers to the Board - addCheckers()

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

### 4A. Starting the current players turn - startTurn()

We start the turn by getting all the current player checkers and seeing if they have positions to move to

```javascript
const startTurn = () => {
  const $checkers = getPlayerPieces();
  checkForMovesAvailable($checkers);
};
```

### 4B. Getting the current player checkers - getPlayerPieces()

To get the current player pieces, we filter black or red pieces from all checkers array based on player turn.

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

### 5A. Checking for moves available for current player - checkForMovesAvailable()

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
  checkForNoMovesLeft();
};
```

### 5B. Check for win condition 2, i.e. no moves remaining for player - checkForNoMovesLeft()

If there are no checkers with highlight class (that is the length of the array of checkers with highlight class is 0), then there are no moves remaining for current player and hence the other player is declared as winner by invoking the end game function

```javascript
const checkForNoMovesLeft = () => {
  if ($(`.highlightChecker`).length === 0) {
    if (currentPlayer === 1) {
      endGame(2);
    } else {
      endGame(1);
    }
  }
};
```

### 5C. Ending the game - endGame()

To show that it is the end of the game, we bring the game over container into view, and add the winners name and color to style the container and display who the winner is

```javascript
const endGame = winner => {
  $(`#game-over-container`).css(`display`, `flex`);
  if (winner === 1) {
    $(`#game-over`).addClass(`black`);
    $(`#game-winner`).text(`BLACK`);
  } else if (winner === 2) {
    $(`#game-over`).addClass(`red`);
    $(`#game-winner`).text(`RED`);
  }
};
```

### 6A. Checking for forward diagonals - checkForForwardDiagonals()

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

### 6B. Check for all diagonals for move options - checkForAllDiagonals()

We first get checkers parent square data, and then we check if we can make a move by invoking
checkForMoveSquare on all 4 diagonals - top left, top right, bot left and bot right.

```javascript
const checkForAllDiagonals = $checker => {
  const squareData = $checker.parent().data(`data`);
  checkForMoveSquare(
    squareData.topLeft,
    $squares.eq(squareData.topLeft).data(`data`).topLeft,
    $checker
  );
  checkForMoveSquare(
    squareData.topRight,
    $squares.eq(squareData.topRight).data(`data`).topRight,
    $checker
  );
  checkForMoveSquare(
    squareData.botLeft,
    $squares.eq(squareData.botLeft).data(`data`).botLeft,
    $checker
  );
  checkForMoveSquare(
    squareData.botRight,
    $squares.eq(squareData.botRight).data(`data`).botRight,
    $checker
  );
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

### 9. Add highlightChecker class to all checkers that can make a move - addHighlightToChecker()

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

### 10. Adding a click handler to the highlighted checkers - clickHandlerToHighlightedChecker()

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

### 11. Reset Highlight Squares by adding dark class back and removing on click - resetHighlightSquares()

```javascript
const resetHighlightSquares = () => {
  $(`.highlightSquare`)
    .removeClass(`highlightSquare`)
    .addClass(`dark`);
  $(`.dark`).off(`click`);
};
```

### 12. Add selected to checker that was clicked - addSelectedToChecker()

```javascript
const addSelectedToChecker = $checker => {
  const $selected = $(`.selectChecker`);
  if ($selected) {
    for (const checker of $selected) {
      removeSelectedFromChecker($(checker));
    }
  }
  $checker.removeClass(`highlightChecker`).addClass(`selectChecker`);
};
```

### 13. Add highlightSquare class to all squares that the checker can move to - addHighlightToSquare()

```javascript
const addHighlightToSquare = $square => {
  if ($square) {
    $square.removeClass(`dark`).addClass(`highlightSquare`);
  }
};
```

### 14. Add a click handler to highlighted square

Click Handler on Highlighted Square takes in current square, next square to move to that will be clicked by user, checker on current square and opponent checker on move square, if next square is jump square.

On clicking the next square, the user has chosen to make their move. We reset highlighting on all squares.
Then we set current square's hasPiece to false and append checker to next square.
If opponent checker exists, then we remove it off the board and set its square's hasPiece to false.

If current player is black, we update black score as a checker was just captured. Similarly for red score.
Next, we check if checker is on opponent edge, so that we can convert checker to king piece. [checkIfAtOpponentEdge]
Then we set next square's hasPiece to true and reset the diagonals array stored inside checker so that we can reuse the object during the next move.

```javascript
const clickHandlerToHighlightSquare = (
  $currentSquare,
  $nextSquare,
  $checker,
  $opponentChecker
) => {
  if ($nextSquare) {
    $nextSquare.on(`click`, () => {
      resetHighlightSquares();
      $currentSquare.data(`data`).hasPiece = false;
      $checker.appendTo($nextSquare);
      if ($opponentChecker) {
        $opponentChecker.parent().data(`data`).hasPiece = false;
        $opponentChecker.remove();
        if (currentPlayer === 1) {
          blackScore++;
          $(`#black-score`).text(blackScore);
        } else {
          redScore++;
          $(`#red-score`).text(redScore);
        }
      }
      checkIfAtOpponentEdge($nextSquare);
      $nextSquare.data(`data`).hasPiece = true;
      $nextSquare.off(`click`);
      $(`.highlightSquare`)
        .removeClass(`highlightSquare`)
        .addClass(`dark`);
      $checker.data(`data`).diagonals = [];
      changePlayerTurn();
    });
  }
};
```

### 15. Check if checker is now at opponent's end of the board - checkIfAtOpponentEdge()

If checker has reached the end of the board, then it can move in all 4 diagonals and not just forward as it is a king piece now. To indigate that it is a king piece we set checkers property isItKing as true and add an image div 'crown.png' to the checker.

Can probably refactor this some more (when you have time)

```javascript
const checkIfAtOpponentEdge = $square => {
  if (currentPlayer === 1) {
    if ($square.data(`data`).row === 1) {
      if (!$square.children().data(`data`).isItKing) {
        $square
          .children()
          .append(
            $(
              `<img src="https://ashwanth1109.github.io/CheckersApp/img/crown.png"/>`
            )
          );
        $square.children().data(`data`).isItKing = true;
      }
    }
  } else if (currentPlayer === 2) {
    if ($square.data(`data`).row === gameSize) {
      if (!$square.children().data(`data`).isItKing) {
        $square
          .children()
          .append(
            $(
              `<img src="https://ashwanth1109.github.io/CheckersApp/img/crown.png"/>`
            )
          );
        $square.children().data(`data`).isItKing = true;
      }
    }
  }
};
```

### 16. Change Player Turn as turn is completed - changePlayerTurn()

When the current player turn is complete, then we first check for win condition, i.e. has black or red captured all the opponents checkers. If yes, we invoke end game function, passing in the winner denoted by 1 or 2 as parameter.

If game is not over, then we alternate the current player variable and rotate the board using a keyframe animation css class. Then we reset all checkers so that none of them have highlights or click events. We also reset the checker diagonals array for reuse.

At the end of the animation, we then check for moves available for the next player turn.

```javascript
const changePlayerTurn = () => {
  if (blackScore === 12) {
    endGame(1);
  } else if (redScore === 12) {
    endGame(2);
  }

  if (currentPlayer === 1) {
    currentPlayer = 2;
    if ($gameBoard.hasClass(`rotate-board-2`)) {
      $gameBoard.removeClass(`rotate-board-2`).removeClass(`board-state-2`);
    }
    $gameBoard.addClass(`rotate-board-1`).addClass(`board-state-1`);
  } else {
    currentPlayer = 1;
    if ($gameBoard.hasClass(`rotate-board-1`)) {
      $gameBoard.removeClass(`rotate-board-1`).removeClass(`board-state-1`);
    }
    $gameBoard.addClass(`rotate-board-2`).addClass(`board-state-2`);
  }

  resetCheckerClass();

  for (const checker of $(`.player`)) {
    const resetData = $(checker).data(`data`);
    resetData.diagonals = [];
    $(checker).data(`data`, resetData);
  }

  setTimeout(() => {
    checkForMovesAvailable();
  }, 1500);
};
```
