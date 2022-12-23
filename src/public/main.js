import { CORNCOB_WORD_LIST } from "./constants/harderWordList.js";
import { normalModeSubmit } from "./modules/normalModeSubmit.js";

// Nodes for processing input
const input = document.getElementById('guessWord');
const submit = document.getElementById('submit');
const guessList = document.getElementById('guessList');
const successNode = document.getElementById('success');

// Nodes for processing language selections
const languageButton = document.getElementById('languageButton');
const languageOptions = document.getElementById('languageOptions');

// Nodes for processing difficulty selections
const modeButton = document.getElementById('modeButton');
const modeOptions = document.getElementById('modeOptions');

const wordListLength = CORNCOB_WORD_LIST.length;
const wordIndex = Math.floor((Math.random()) * wordListLength);
const guesses = [];
const guessHints = [];

const onSubmit = () => {
  // TODO: Add a 'give up' button instead of logging the solution
  console.log(CORNCOB_WORD_LIST[wordIndex]);
  const guessWord = input.value;
  if (!input.value) {
    return;
  }

  if (!CORNCOB_WORD_LIST.includes(guessWord)) {
    // TODO: add toggle that doesn't allow words not
    // on the list instead of logging this info
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

// Add functionality to choose language menu
const languageChoices = [...languageOptions.getElementsByTagName('button')];
languageChoices.forEach(choice => {
  choice.addEventListener('click', () => languageButton.innerText = choice.innerText);
});

// Add functionality to choose mode menu
const modeChoices = [...modeOptions.getElementsByTagName('button')];
modeChoices.forEach(choice => {
  choice.addEventListener('click', () => modeButton.innerText = choice.innerText);
});