//-----CREATE BOARD DYNAMICALLY-----//

//-----GET THE GAME BOARD-----//
const $gameBoard = $(`#game-board`);
console.log($gameBoard);

//-----CONSTANTS-----//
const gameSize = 8;

//-----CREATE ROWS-----//
for (let i = 1; i <= 8; i++) {
  const $row = $(`<div class="row">`).appendTo($gameBoard);
  //-----CREATE SQUARES-----//
  for (let j = 1; j <= 8; j++) {
    const $square = $(`<div class="square">`).appendTo($row);
    const squareData = new Square(i, j);
    $square.data(`squareData`, squareData);
    if (!((i + j) % 2)) {
      $square.addClass(`dark`);
      if (i < 4) {
        $(`<div class="player1">`).appendTo($square);
      } else if (i > 5) {
        $(`<div class="player2">`).appendTo($square);
      }
    } else {
      $square.addClass(`light`);
    }
    console.log($square.data());
  }
}
