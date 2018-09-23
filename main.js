// console.log($);

//-----CONSTANTS-----//
let player0Turn = true;

//-----GET THE GAME BOARD-----//
const $gameBoard = $(`#game-board`);
//-----DEFINE THE GAME SIZE-----//
const gameSize = 8;

//-----CREATE BOARD AND PIECES-----//
createBoard();
// FUNCTION ALSO SETS CLICK LISTENERS

//-----GET ALL THE ROWS-----//
const $rows = $(`.row`);
//-----GET ALL THE SQUARES-----//
const $squares = $(`.square`);

//-----IDENTIFIES ALL SQUARES WITH PIECES-----//
//-----HIGHLIGHTS PIECES OF PLAYER 1 THAT CAN MAKE A MOVE-----//
//-----ADD A CLICK LISTENER TO HIGHLIGHTED PIECES-----//
//-----ON CLICK, SHOWS NEXT POSSIBLE MOVE-----//
findSquaresWithPieces();
