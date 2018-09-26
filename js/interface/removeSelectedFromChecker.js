const removeSelectedFromChecker = $checker => {
  if ($checker.hasClass(`selectChecker`)) {
    $checker.removeClass(`selectChecker`).addClass(`highlightChecker`);
  }
};
