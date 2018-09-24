//------------------------------------------------------------------------------------
// ANIMATE INSTRUCTIONS INTO VIEW USING JQUERY METHODS
//------------------------------------------------------------------------------------
//-----GET INSTRUCTIONS DIV AND ANIMATE IT INTO VIEW-----//
const showInstructions = () => {
  if (!instructionsShown) {
    //-----SET instructionsShown VALUE TO BE TRUE-----//
    instructionsShown = true;
    //-----FADE INSTRUCTIONS INTO VIEW USING OPACITY-----//
    $(`#instructions`).css(`opacity`, 1);
    //-----MOVE INSTRUCTIONS TO THE FRONT BY SETTING Z INDEX TO 1-----//
    $(`#instructions`).css(`zIndex`, 2);
  }
};
