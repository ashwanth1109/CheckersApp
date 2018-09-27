const createBoard = () => {
  // console.log(`creating board`);
  //-----FOR LOOP TO CREATE ROWS-----//
  for (let i = 1; i <= gameSize; i++) {
    //-----ROWS HAVE CLASS OF ROW: APPEND TO GAME BOARD-----//
    const $row = $(`<div class="row">`).appendTo($gameBoard);
    //-----FOR LOOP TO CREATE SQUARES-----//
    for (let j = 1; j <= gameSize; j++) {
      //-----SQUARES HAVE CLASS OF SQUARE: APPEND TO ROW-----//
      const $square = $(`<div class="square">`).appendTo($row);
      $(`<div class="horizontal-border">`).appendTo($row);
      //-----data STORES SQUARE OBJECT CREATED FROM SQUARE CLASS-----//
      const data = new Square(i, j);
      $square.data(`data`, data);
      //
      //-----ADD CLASS DARK TO ALTERNATING SQUARES-----//
      if (!((i + j) % 2)) {
        $square.addClass(`dark`);
        //-----ADD PLAYER 2 PIECES ON TO THE BOARD-----//
        if (i < 4) {
          //-----ADD PLAYER 2 PIECES AND SET CLICK HANDLER-----//
          addCheckers($square, 2);
        }
        //-----ADD PLAYER 1 PIECES ON TO THE BOARD-----//
        else if (i > 5) {
          //-----ADD PLAYER 1 PIECES AND SET CLICK HANDLER-----//
          addCheckers($square, 1);
        }
      }
      //-----ADD CLASS LIGHT TO ALTERNATING SQUARES-----//
      else {
        $square.addClass(`light`);
      }
    }
    $(`<div class="vertical-border">`).appendTo($gameBoard);
  }
};
