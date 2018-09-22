// console.log($);

//-----CONSTANTS-----//
let player1Turn = true;

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

highlightPieces();
