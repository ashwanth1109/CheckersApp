const hideInstructions = () => {
  instructionsShown = false;
  $(`#instructions`).css(`opacity`, `0`);
  //-----MOVE INSTRUCTIONS TO THE BACK BY SETTING Z INDEX TO 0-----//
  setTimeout(2000, () => {
    $(`#instructions`).css(`zIndex`, 0);
  });
};
