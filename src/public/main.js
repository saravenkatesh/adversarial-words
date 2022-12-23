import { CORNCOB_WORD_LIST } from "./constants/harderWordList.js";
import { normalModeSubmit } from "./modules/normalModeSubmit.js";

const input = document.getElementById('guessWord');
const submit = document.getElementById('submit');
const guessList = document.getElementById('guessList');
const successNode = document.getElementById('success');

const wordListLength = CORNCOB_WORD_LIST.length;
const wordIndex = Math.floor((Math.random()) * wordListLength);
const guesses = [];
const guessHints = [];

const onSubmit = () => {
  // TODO: Add a 'give up' button
  console.log(CORNCOB_WORD_LIST[wordIndex]);

  const guessWord = input.value;
  if (!input.value) {
    return;
  }

  if (!CORNCOB_WORD_LIST.includes(guessWord)) {
    // TODO: add toggle that doesn't allow words not
    // on the list
    console.log('Not a word that we know!');
  }

  normalModeSubmit({
    guess: guessWord,
    solution: CORNCOB_WORD_LIST[wordIndex],
    guessHints,
    guessList,
    guesses,
    successNode,
    submit,
    input
  });

  input.value = '';
};

document.onkeydown = e => {
  if(e.key === 'Enter'){
    onSubmit();
  }
};

submit.addEventListener('click', onSubmit);