const toggleRotation = () => {
  if (
    $(`#rotate-button`)
      .children()
      .eq(0)
      .hasClass(`rotate-image1`)
  ) {
    $(`#rotate-button`)
      .children()
      .eq(0)
      .removeClass(`rotate-image1`)
      .addClass(`rotate-image2`);
  } else {
    $(`#rotate-button`)
      .children()
      .eq(0)
      .removeClass(`rotate-image2`)
      .addClass(`rotate-image1`);
  }
  boardRotation = !boardRotation;
};
