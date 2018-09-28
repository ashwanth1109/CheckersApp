//------------------------------------------------------------------------------------
// Function that creates the game board
//------------------------------------------------------------------------------------
const createBoard = () => {
  //------------------------------------------------------------------------------------
  // For Loop to create 'gameSize' number of rows
  //------------------------------------------------------------------------------------
  for (let i = 1; i <= gameSize; i++) {
    //------------------------------------------------------------------------------------
    // Create divs with class row and append them to the game board
    //------------------------------------------------------------------------------------
    const $row = $(`<div class="row">`).appendTo($gameBoard);
    //------------------------------------------------------------------------------------
    // For Loop to create 'gameSize' number of squares
    //------------------------------------------------------------------------------------
    for (let j = 1; j <= gameSize; j++) {
      //------------------------------------------------------------------------------------
      // Create divs with class square and append them to the row divs
      //------------------------------------------------------------------------------------
      const $square = $(`<div class="square">`).appendTo($row);
      //------------------------------------------------------------------------------------
      // Adds a horizontal border between each squares
      //------------------------------------------------------------------------------------
      $(`<div class="horizontal-border">`).appendTo($row);
      //------------------------------------------------------------------------------------
      // We create square objects from the square class and add them as data attributes
      //------------------------------------------------------------------------------------
      const data = new Square(i, j, gameSize);
      $square.data(`data`, data);
      //------------------------------------------------------------------------------------
      // Identify alternating squares
      //------------------------------------------------------------------------------------
      if (!((i + j) % 2)) {
        //------------------------------------------------------------------------------------
        // Add class dark to alternating squares
        //------------------------------------------------------------------------------------
        $square.addClass(`dark`);
        //------------------------------------------------------------------------------------
        // Add player pieces at their starting positions on dark square
        //------------------------------------------------------------------------------------
        if (i < 4) {
          //------------------------------------------------------------------------------------
          // Add player 2 pieces and set checker data object on the checker pieces
          //------------------------------------------------------------------------------------
          addCheckers($square, 2);
        } else if (i > 5) {
          //------------------------------------------------------------------------------------
          // Add player 2 pieces and set checker data object on the checker pieces
          //------------------------------------------------------------------------------------
          addCheckers($square, 1);
        }
      }
      //------------------------------------------------------------------------------------
      // Add class light to every other alternating square
      //------------------------------------------------------------------------------------
      else {
        $square.addClass(`light`);
      }
    }
    //------------------------------------------------------------------------------------
    // Adds a vertical border between rows on the game board
    //------------------------------------------------------------------------------------
    $(`<div class="vertical-border">`).appendTo($gameBoard);
  }
};
