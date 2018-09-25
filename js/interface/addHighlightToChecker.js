const addHighlightToChecker = $checker => {
  if (!$checker.hasClass(`highlightChecker`)) {
    // console.log(`adding highlight class to checker`);
    $checker.addClass(`highlightChecker`);
    // Add click handler
    $checker.on(`click`, clickHighlightedChecker);
  }
};
