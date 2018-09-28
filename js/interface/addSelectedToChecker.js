//------------------------------------------------------------------------------------
// Function to add class selected to clicked checker
//------------------------------------------------------------------------------------
const addSelectedToChecker = $checker => {
  //------------------------------------------------------------------------------------
  // Get all previously selected Checkers and remove selected to reset it
  //------------------------------------------------------------------------------------
  const $selected = $(`.selectChecker`);
  if ($selected) {
    for (const checker of $selected) {
      removeSelectedFromChecker($(checker));
    }
  }
  //------------------------------------------------------------------------------------
  // Add selected to checker that was passed in as a parameter
  //------------------------------------------------------------------------------------
  $checker.removeClass(`highlightChecker`).addClass(`selectChecker`);
};
