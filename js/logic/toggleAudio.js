const toggleAudio = () => {
  if (
    $(`#audio-button`)
      .children()
      .eq(0)
      .hasClass(`audio-image1`)
  ) {
    $(`#audio-button`)
      .children()
      .eq(0)
      .removeClass(`audio-image1`)
      .addClass(`audio-image2`);
  } else {
    $(`#audio-button`)
      .children()
      .eq(0)
      .removeClass(`audio-image2`)
      .addClass(`audio-image1`);
  }
  audioPlay = !audioPlay;
};
