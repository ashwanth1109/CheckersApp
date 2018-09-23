// const findPlayerPieces = (squareData, $square) => {
//   //-----DEFINE VARIABLES DIAGONAL1, DIAGONAL2 AND BOUNDARY1-----//
//   let diagonal1, diagonal2, boundary1;
//   //-----IF PLAYER 1, DIAGONALS SHOULD BE BOT LEFT & BOT RIGHT AND BOUNDARY IS 9-----//
//   if (squareData.playerId === 0) {
//     diagonal1 = squareData.botLeft;
//     diagonal2 = squareData.botRight;
//     boundary1 = 9;
//   }
//   //-----IF PLAYER 2, DIAGONALS SHOULD BE TOP LEFT & TOP RIGHT AND BOUNDARY IS 0-----//
//   else if (squareData.playerId === 1) {
//     diagonal1 = squareData.topLeft;
//     diagonal2 = squareData.topRight;
//     boundary1 = 0;
//   }
//   //-----CHECK IF DIAGONAL1 PIECE FALLS WITHIN THE BOARD-----//
//   if (diagonal1[0] !== boundary1 && diagonal1[1] !== 0) {
//     //-----IF DIAGONAL1 IS IN BOARD, CALL FUNCTION TO ADD CLASS HIGHLIGHT-----//
//     addClassHighlight(diagonal1[0], diagonal1[1], $square);
//   }
//   //-----CHECK IF DIAGONAL2 PIECE FALLS WITHIN THE BOARD-----//
//   if (diagonal2[0] !== boundary1 && diagonal2[1] !== 9) {
//     //-----IF DIAGONAL2 IS IN BOARD, CALL FUNCTION TO ADD CLASS HIGHLIGHT-----//
//     addClassHighlight(diagonal2[0], diagonal2[1], $square);
//   }
// };
