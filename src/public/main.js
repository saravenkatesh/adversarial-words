import { CORNCOB_WORD_LIST } from "./constants.js";

const input = document.getElementById('guessWord');
const submit = document.getElementById('submit');
const guessList = document.getElementById('guessList');

const wordListLength = CORNCOB_WORD_LIST.length;
const wordIndex = Math.floor((Math.random()) * wordListLength);
const guesses = [];

const onSubmit = () => {
  const guessWord = input.value;
  if (!CORNCOB_WORD_LIST.includes(guessWord)) {
    console.log('Not a word that we know!');
  }
  if (guessWord === CORNCOB_WORD_LIST[wordIndex]) {
    console.log( 'Success');
  };
  if (guessWord < CORNCOB_WORD_LIST[wordIndex]) {
    console.log( 'Word comes after');
  };
  if (guessWord > CORNCOB_WORD_LIST[wordIndex]) {
    console.log( 'Word comes before');
  };
  guesses.push(guessWord);
  guesses.sort();

  guessList.innerHTML = "";
  for (const guess of guesses) {
    const guessDiv = document.createElement('div');
    const text = document.createTextNode(guess);
    guessDiv.append(text);
    guessList.append(guessDiv);
  }
};

submit.addEventListener('click', onSubmit);