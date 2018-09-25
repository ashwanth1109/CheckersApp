// console.log($);

//-----Create variable that keeps track of whether instructions are shown or not-----//
let instructionsShown = false;
//-----Create a variable that controls the size of the game board-----//
let gameSize = 8;
//-----Create a variable that keeps track of which players turn it is-----//
let currentPlayer = 1;

//------------------------------------------------------------------------------------
// Create board with checkers on them
//------------------------------------------------------------------------------------
$gameBoard = $(`<div id="game-board">`).appendTo($(`#game-container`));
createBoard();

// //------------------------------------------------------------------------------------
// // Show Instructions on Document Load
// //------------------------------------------------------------------------------------
// showInstructions();

//------------------------------------------------------------------------------------
// Add on click event handler to button #instructiions-button
//------------------------------------------------------------------------------------
$(`#instructions-button`).on(`click`, showInstructions);

//------------------------------------------------------------------------------------
// Add click handler to close button
//------------------------------------------------------------------------------------
$(`#close-instructions`).on(`click`, hideInstructions);

//------------------------------------------------------------------------------------
// Add on click event handler to button #new-game
//------------------------------------------------------------------------------------
$(`#new-game`).on(`click`, startNewGame);

//------------------------------------------------------------------------------------
// Store all squares in constant $squares
//------------------------------------------------------------------------------------
const $squares = $(`.square`);

//------------------------------------------------------------------------------------
// TERMINOLOGY: Piece or Checker | Square | JumpSquare | MoveSquare
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// Check for moves available for current player
//------------------------------------------------------------------------------------
checkForMovesAvailable();
