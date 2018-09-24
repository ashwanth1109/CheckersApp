class Square {
  constructor(rowPosition, columnPosition) {
    this.rowPosition = rowPosition;
    this.columnPosition = columnPosition;
    this.topLeft = [rowPosition - 1, columnPosition - 1];
    this.topRight = [rowPosition - 1, columnPosition + 1];
    this.botLeft = [rowPosition + 1, columnPosition - 1];
    this.botRight = [rowPosition + 1, columnPosition + 1];
    this.value = (rowPosition - 1) * 8 + columnPosition;
    this.hasPiece = false; // possibility of refactoring this into playerId
    this.playerId = null;
  }
}
