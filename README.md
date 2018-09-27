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

We use nested for loops to iterate from 1 to 8 (or gameSize) and create 64 squares.
Each square also has a data attribute which stores the square object created from the square class
Alternating squares are provided classes 'light' and 'dark' to create the checker pattern

```javascript
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
```

### 3. Adding checkers to the Board - addCheckers()
