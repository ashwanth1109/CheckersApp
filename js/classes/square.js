//-----SQUARE CLASS-----//

class Square {
  convertToValue(row, column) {
    console.log(typeof row);
    if (row === 0 || row === 9 || column === 0 || column === 9) {
      return null;
    }
    return (row - 1) * 8 + column - 1;
  }

  constructor(rowPosition, columnPosition) {
    this.row = rowPosition;
    this.column = columnPosition;

    this.topLeftArray = [rowPosition - 1, columnPosition - 1];
    this.topLeft = this.convertToValue(
      this.topLeftArray[0],
      this.topLeftArray[1]
    );

    this.topRightArray = [rowPosition - 1, columnPosition + 1];
    this.topRight = this.convertToValue(
      this.topRightArray[0],
      this.topRightArray[1]
    );

    this.botLeftArray = [rowPosition + 1, columnPosition - 1];
    this.botLeft = this.convertToValue(
      this.botLeftArray[0],
      this.botLeftArray[1]
    );

    this.botRightArray = [rowPosition + 1, columnPosition + 1];
    this.botRight = this.convertToValue(
      this.botRightArray[0],
      this.botRightArray[1]
    );

    this.value = this.convertToValue(this.row, this.column);

    this.hasPiece = false;
  }
}
