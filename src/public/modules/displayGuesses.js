import { appendGuessBox } from "./guessBox.js";

export const displayGuesses = (guesses, guess, guessList, guessHints, solution) => {
  guesses.push(guess);
  guesses.sort();
  guessHints.sort();

  guessList.innerHTML = "";
  guesses.forEach((guess, index) => {
    const guessDiv = document.createElement('div');

    guessDiv.style.width = '256px';
    guessDiv.style.height = '40px';
    guessDiv.style.backgroundColor = (guess === solution) ? '#fde68a' : '#d6d3d1';
    guessDiv.style.borderRadius = "8px";
    guessDiv.style.verticalAlign = "middle";
    guessDiv.style.lineHeight = '40px';
    guessDiv.style.paddingLeft = '4px';
    
    const text = document.createTextNode(guess);
    guessDiv.append(text);
    if (
        (index === 0 || guessHints[index - 1] === 'a')
        && guessHints[index] === 'b'
    ) {
      appendGuessBox(guessList);
    }
    guessList.append(guessDiv);
  })

  if (guessHints[guessHints.length - 1] === 'a') {
    appendGuessBox(guessList);
  };
};