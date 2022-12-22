import { CORNCOB_WORD_LIST } from "./constants.js";

const input = document.getElementById('guessWord');
const submit = document.getElementById('submit');
const guessList = document.getElementById('guessList');
const successNode = document.getElementById('success');

const wordListLength = CORNCOB_WORD_LIST.length;
const wordIndex = Math.floor((Math.random()) * wordListLength);
const guesses = [];
const guessHints = [];

let correctGuess = false;

const makeGuessLine = () => {
  const guessLine = document.createElement('hr');
  guessLine.style.color = "#fde68a";
  guessLine.style.backgroundColor = "#fde68a";
  guessLine.style.borderColor = "#fde68a";
  guessLine.style.width = '256px';
  guessLine.style.height = "40px";
  guessLine.style.borderRadius = "8px";
  guessList.append(guessLine);
}

const onSubmit = () => {
  console.log(CORNCOB_WORD_LIST[wordIndex]);
  const guessWord = input.value;
  if (!input.value) {
    return;
  }
  if (!CORNCOB_WORD_LIST.includes(guessWord)) {
    console.log('Not a word that we know!');
  }
  if (guessWord === CORNCOB_WORD_LIST[wordIndex]) {
    correctGuess = true;
    guessHints.push('ab');
    const successDiv = document.createElement('div');
    const success = document.createTextNode('Success! Refresh the page to play again');
    successDiv.append(success);
    successNode.append(success);
    submit.disabled = true;
    input.disabled = true;
  };
  if (guessWord < CORNCOB_WORD_LIST[wordIndex]) {
    guessHints.push('a');
  };
  if (guessWord > CORNCOB_WORD_LIST[wordIndex]) {
    guessHints.push('b');
  };
  guesses.push(guessWord);
  guesses.sort();
  guessHints.sort();

  guessList.innerHTML = "";
  guesses.forEach((guess, index) => {
    const guessDiv = document.createElement('div');
    guessDiv.style.width = '256px';
    guessDiv.style.height = '40px';
    guessDiv.style.backgroundColor = (guess === CORNCOB_WORD_LIST[wordIndex]) ? '#fde68a' : '#d6d3d1';
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
      makeGuessLine();
    }
    guessList.append(guessDiv);
  })

  if (guessHints[guessHints.length - 1] === 'a') {
    makeGuessLine();
  }
};

submit.addEventListener('click', onSubmit);