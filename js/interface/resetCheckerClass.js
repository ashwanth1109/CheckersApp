const resetCheckerClass = () => {
  $(`.selectChecker`)
    .removeClass(`selectChecker`)
    .addClass(`highlightChecker`);

  $(`.highlightChecker`)
    .removeClass(`highlightChecker`)
    .off(`click`);
};
