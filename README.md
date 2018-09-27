# CheckersApp

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

(2)
