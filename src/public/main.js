import { CORNCOB_WORD_LIST } from "./constants.js";

const input = document.getElementById('guessWord');
const submit = document.getElementById('submit');
const guessList = document.getElementById('guessList');
const successNode = document.getElementById('success');

const wordListLength = CORNCOB_WORD_LIST.length;
const wordIndex = Math.floor((Math.random()) * wordListLength);
const guesses = [];
const guessHints = [];

const makeGuessLine = () => {
  const guessLine = document.createElement('hr');
  guessLine.style.color = "red";
  guessLine.style.backgroundColor = "red";
  guessLine.style.borderColor = "red";
  guessLine.style.width = '64px';
  guessLine.style.height = "2px";
  guessList.append(guessLine);
}

const onSubmit = () => {
  console.log(CORNCOB_WORD_LIST[wordIndex]);
  const guessWord = input.value;
  if (!CORNCOB_WORD_LIST.includes(guessWord)) {
    console.log('Not a word that we know!');
  }
  if (guessWord === CORNCOB_WORD_LIST[wordIndex]) {
    guessHints.push('s');
    const successDiv = document.createElement('div');
    const success = document.createTextNode('Success!');
    successDiv.append(success);
    successNode.append(success);
    submit.disabled = true;
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