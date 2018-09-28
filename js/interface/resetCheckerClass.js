//------------------------------------------------------------------------------------
// Function that resets all checkers class that are highlighted or selected,
// removes the click handlers that are set on the checkers
// and then resets all the diagonal objects stored in diagonals array of checkers
//------------------------------------------------------------------------------------
const resetCheckerClass = () => {
  $(`.selectChecker`)
    .removeClass(`selectChecker`)
    .addClass(`highlightChecker`);

  $(`.highlightChecker`)
    .removeClass(`highlightChecker`)
    .off(`click`);

  //------------------------------------------------------------------------------------
  // Resets all the diagonals data stored inside each checker
  //------------------------------------------------------------------------------------
  for (const checker of $(`.player`)) {
    const resetData = $(checker).data(`data`);
    resetData.diagonals = [];
    $(checker).data(`data`, resetData);
  }
};
