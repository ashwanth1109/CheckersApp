const addHighlightToChecker = $checker => {
  console.log(`adding highlight class to checker`);
  $checker.addClass(`highlightChecker`);

  // Add click handler
  $checker.on(`click`, clickHighlightedChecker);
};
