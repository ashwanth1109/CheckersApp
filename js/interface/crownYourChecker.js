//------------------------------------------------------------------------------------
// Function checks to see if your checker is already king. If not, then it converts it to king
// by adding crown image on checker and setting checkers isItKing property to true
//------------------------------------------------------------------------------------
const crownYourChecker = $square => {
  //------------------------------------------------------------------------------------
  // Check if checker is already king
  //------------------------------------------------------------------------------------
  if (!$square.children().data(`data`).isItKing) {
    //------------------------------------------------------------------------------------
    // Add img to checker
    //------------------------------------------------------------------------------------
    $square
      .children()
      .append(
        $(
          `<img src="https://ashwanth1109.github.io/CheckersApp/img/crown.png"/>`
        )
      );
    //------------------------------------------------------------------------------------
    // Set isItKing property in checker to true
    //------------------------------------------------------------------------------------
    $square.children().data(`data`).isItKing = true;
  }
};
