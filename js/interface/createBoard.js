//----------//
/*
  DEPENDENCIES -
  $gameBoard - DIV
  addPlayerPiece - FUNC
*/
//----------//

//-----CREATE BOARD DYNAMICALLY-----//
const createBoard = () => {
  //-----FOR LOOP TO CREATE ROWS-----//
  for (let i = 1; i <= 8; i++) {
    //-----ROWS HAVE CLASS OF ROW: APPEND TO GAME BOARD-----//
    const $row = $(`<div class="row">`).appendTo($gameBoard);
    //-----FOR LOOP TO CREATE SQUARES-----//
    for (let j = 1; j <= 8; j++) {
      //-----SQUARES HAVE CLASS OF SQUARE: APPEND TO ROW-----//
      const $square = $(`<div class="square">`).appendTo($row);
      //-----squareData STORES SQUARE OBJECT CREATED FROM SQUARE CLASS-----//
      const squareData = new Square(i, j);
      $square.data(`squareData`, squareData);
      //-----ADD CLASS DARK TO ALTERNATING SQUARES-----//
      if (!((i + j) % 2)) {
        $square.addClass(`dark`);
        //-----ADD PLAYER 1 PIECES ON TO THE BOARD-----//
        if (i < 4) {
          //-----ADD PLAYER 1 PIECES AND SET CLICK HANDLER-----//
          addPlayerPiece($square, 0);
        }
        //-----ADD PLAYER 2 PIECES ON TO THE BOARD-----//
        else if (i > 5) {
          //-----ADD PLAYER 2 PIECES AND SET CLICK HANDLER-----//
          addPlayerPiece($square, 1);
        }
      }
      //-----ADD CLASS LIGHT TO ALTERNATING SQUARES-----//
      else {
        $square.addClass(`light`);
      }
    }
  }
  const $img = $(`<img src="../../img/crown.png"/>`);
  $(`.player1`).append($img);
};
