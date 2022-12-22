export const appendGuessBox = guessList => {
  const guessLine = document.createElement('hr');

  guessLine.style.color = "#fde68a";
  guessLine.style.backgroundColor = "#fde68a";
  guessLine.style.borderColor = "#fde68a";
  guessLine.style.width = '256px';
  guessLine.style.height = "40px";
  guessLine.style.borderRadius = "8px";

  guessList.append(guessLine);
}