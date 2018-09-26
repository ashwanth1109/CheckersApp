const endGame = winner => {
  $(`#game-over-container`).css(`display`, `flex`);
  if (winner === 1) {
    $(`#game-over`).addClass(`black`);
    $(`#game-winner`).text(`BLACK`);
  } else if (winner === 2) {
    $(`#game-over`).addClass(`red`);
    $(`#game-winner`).text(`RED`);
  } else {
    console.error(`Incorrect value of param passed into function endGame()`);
  }
};
