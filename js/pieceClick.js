const highlightNextMove = () => {
  console.log(`object`);
};

const pieceClick = event => {
  console.log(`Piece was clicked`);
  console.log(event.currentTarget);
  const $clickedPiece = $(event.currentTarget);
  // console.log($(event.currentTarget).hasClass(`highlight`));
  if ($clickedPiece.hasClass(`highlight`)) {
    // SHOW THAT PIECE IS CLICKED
    const $squares = $(`.highlight`);
    for (let i = 0; i < $squares.length; i++) {
      if ($squares.eq(i).hasClass(`selected`)) {
        $squares.eq(i).removeClass(`selected`);
      }
    }
    $clickedPiece.addClass(`selected`);
  }
};
