const addCheckers = ($square, playerId) => {
  const $checker = $(`<div class="player">`).appendTo($square);

  $square.data(`data`).hasPiece = true;
  if (playerId === 1) {
    const data = new Checker(playerId);
    $checker.data(`data`, data);
    $checker.addClass(`black`);
  } else if (playerId === 2) {
    const data = new Checker(playerId);
    $checker.data(`data`, data);
    $checker.addClass(`red`);
  } else {
    console.log(`ERROR: Player ID needs to be either 1 or 2`);
  }
};
