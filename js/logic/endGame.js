//------------------------------------------------------------------------------------
// Function that displays the winner in the UI. Takes in winner as param
//------------------------------------------------------------------------------------
const endGame = winner => {
  //------------------------------------------------------------------------------------
  // Bring the game over container into view by setting its display value from none to flex
  //------------------------------------------------------------------------------------
  $(`#game-over-container`).css(`display`, `flex`);
  //------------------------------------------------------------------------------------
  // If winner is player 1, then style game over container accordingly
  // Add text for #game-winner id as BLACK
  //------------------------------------------------------------------------------------
  if (winner === 1) {
    $(`#game-over`).addClass(`black`);
    $(`#game-winner`).text(`BLACK`);
  }
  //------------------------------------------------------------------------------------
  // If winner is player 2, then style game over container accordingly
  // Add text for #game-winner id as RED
  //------------------------------------------------------------------------------------
  else if (winner === 2) {
    $(`#game-over`).addClass(`red`);
    $(`#game-winner`).text(`RED`);
  }
  //------------------------------------------------------------------------------------
  // ERROR HANDLING CASE
  //------------------------------------------------------------------------------------
  else {
    console.error(`Incorrect value of param passed into function endGame()`);
  }
};
