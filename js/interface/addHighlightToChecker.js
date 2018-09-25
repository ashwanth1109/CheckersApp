//------------------------------------------------------------------------------------
// Add Highlight Class to checker - adds a white border to checker
//------------------------------------------------------------------------------------
const addHighlightToChecker = $checker => {
  //------------------------------------------------------------------------------------
  // Check whether checker is already highlighted
  //------------------------------------------------------------------------------------
  if (!$checker.hasClass(`highlightChecker`)) {
    //------------------------------------------------------------------------------------
    // If checker is not highlighted, then add class highlight checker
    //------------------------------------------------------------------------------------
    $checker.addClass(`highlightChecker`);

    //------------------------------------------------------------------------------------
    // Set click handler to highlighted checker
    //------------------------------------------------------------------------------------
    clickHandlerToHighlightedChecker($checker);
  }
};
