//------------------------------------------------------------------------------------
// Class to create square objects - takes in row, column and game size as params
//------------------------------------------------------------------------------------
class Square {
  //------------------------------------------------------------------------------------
  // Constructor function for class square
  //------------------------------------------------------------------------------------
  constructor(rowPosition, columnPosition, gameSize) {
    //------------------------------------------------------------------------------------
    // Store row and column as properties
    //------------------------------------------------------------------------------------
    this.row = rowPosition;
    this.column = columnPosition;

    //------------------------------------------------------------------------------------
    // Based on row and column, determine the row and column positions of all diagonals
    //------------------------------------------------------------------------------------
    this.topLeftArray = [rowPosition - 1, columnPosition - 1];
    this.topRightArray = [rowPosition - 1, columnPosition + 1];
    this.botLeftArray = [rowPosition + 1, columnPosition - 1];
    this.botRightArray = [rowPosition + 1, columnPosition + 1];

    //------------------------------------------------------------------------------------
    // Using the diagonal arrays above, we convert each of these to correspond to a div
    // in the squares array. To access that we need its value position
    //------------------------------------------------------------------------------------
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

    //------------------------------------------------------------------------------------
    // Keeps track of whether the square has a piece or not
    //------------------------------------------------------------------------------------
    this.hasPiece = false;
  }

  //------------------------------------------------------------------------------------
  // Method to that takes in row, column and game size as params and returns null
  // if the square is outside the bounds of the board and returns value to help identify
  // square if it is inside the board
  //------------------------------------------------------------------------------------
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
