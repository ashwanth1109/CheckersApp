//------------------------------------------------------------------------------------
// Convert each instruction section into accordion element by getting #accordion
//------------------------------------------------------------------------------------
// $("#accordion").accordion({
//   icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" }
// });
$("#accordion").accordion();

//-----Create variable that keeps track of whether instructions are shown or not-----//
let instructionsShown = false;
//-----Create a variable that controls the size of the game board-----//
let gameSize = 8;
//-----Create a variable that keeps track of which players turn it is-----//
let currentPlayer = 1;
//-----Create variables to keep track of scores for black and red checkers-----//
let blackScore = 0;
let redScore = 0;

//------------------------------------------------------------------------------------
// Create board with checkers on them
//------------------------------------------------------------------------------------
$gameBoard = $(`<div id="game-board">`).prependTo($(`#game-container`));
createBoard();

// //------------------------------------------------------------------------------------
// // Show Instructions on Document Load
// //------------------------------------------------------------------------------------
// showInstructions();

//------------------------------------------------------------------------------------
// Add on click event handler to button #instructions-button
//------------------------------------------------------------------------------------
$(`#instructions-button`).on(`click`, showInstructions);

//------------------------------------------------------------------------------------
// Add click handler to close button
//------------------------------------------------------------------------------------
$(`#close-instructions`).on(`click`, hideInstructions);

//------------------------------------------------------------------------------------
// Add on click event handler to button #new-game
//------------------------------------------------------------------------------------
$(`#new-game`).on(`click`, startNewGame); // ISSUES WITH THIS

//------------------------------------------------------------------------------------
// Store all squares in constant $squares
//------------------------------------------------------------------------------------
let $squares;

//------------------------------------------------------------------------------------
// TERMINOLOGY: Piece or Checker | Square | JumpSquare | MoveSquare
//------------------------------------------------------------------------------------

startGame();
