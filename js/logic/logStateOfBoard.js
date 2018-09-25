//------------------------------------------------------------------------------------
// Log state of board on change player turn
//------------------------------------------------------------------------------------
const logStateOfBoard = () => {
  for (const square of $squares) {
    const $square = $(square);
    const squareData = $square.data(`data`);
    console.log(
      `The square at row ${squareData.row} and column ${
        squareData.column
      } has piece - ${squareData.hasPiece}`
    );
  }

  for (const checker of $(`.player`)) {
    const $checker = $(checker);
    console.log($checker.data(`data`));
    console.log($);
  }

  console.log(`======================================`);
  console.log(`======================================`);
  console.log(`=CHANGING PLAYER TURN`);
  console.log(`======================================`);
  console.log(`======================================`);
};
