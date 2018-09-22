// console.log($);

//-----CONSTANTS-----//
let player1Turn = true;

//-----GET THE GAME BOARD-----//
const $gameBoard = $(`#game-board`);
//-----DEFINE THE GAME SIZE-----//
const gameSize = 8;

//-----CREATE BOARD-----//
createBoard();

//-----GET ALL THE SQUARES-----//
const $squares = $(`.square`);

highlightPieces();
