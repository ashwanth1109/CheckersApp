//----------//
/*
  DEPENDENCIES -
  $square, playerId - as params
*/
//----------//

//-----FUNC TO ADD CLICK EVENT TO PLAYER PIECES-----//
const addPlayerPiece = ($square, playerId) => {
  //-----PLAYER PIECES APPENDED TO SQUARE-----//
  let $player;
  if (playerId) {
    // IF PLAYER 1 CREATE DIV WITH PLAYER 1 CLASS
    $player = $(`<div class="player1">`).appendTo($square);
  } else {
    // IF PLAYER 2 CREATE DIV WITH PLAYER 2 CLASS
    $player = $(`<div class="player0">`).appendTo($square);
  }
  //-----LET SQUARE KNOW THAT IT HAS A PLAYER PIECE-----//
  $square.data(`squareData`).hasPiece = true;
  //-----LET SQUARE KNOW WHO THE PIECE BELONGS TO-----//
  $square.data(`squareData`).playerId = playerId;
  //-----ENABLE CLICK EVENT ON PLAYER 1 PIECES-----//
  $player.on(`click`, pieceClick);
};
