import { IMPOSSIBLE } from "./constants/choices.js";
import { cheatingModeSubmit } from "./modules/cheatingModeSubmit.js";
import { normalModeSubmit } from "./modules/normalModeSubmit.js";
import { onSelectClick, choicesToWordList } from "./utils.js";

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

var wordList;
var wordListLength;
var wordIndex;

const guesses = [];
const guessHints = [];

const setWordList = () => { 
  wordList = choicesToWordList[languageButton.innerText][modeButton.innerText] 
  wordListLength = wordList.length;
  wordIndex = Math.floor(Math.random()*wordListLength);
};

const onSubmit = () => {
  // TODO: Add a 'give up' button instead of logging the solution
  console.log(`The solution is ${wordList[wordIndex]}`);

  const guessWord = input.value;
  if (!input.value) {
    return;
  }

  if (!wordList.includes(guessWord)) {
    // TODO: add toggle that doesn't allow words not
    // on the list instead of logging this info
    console.log('Not a word that we know!');
  }
  
  if (modeButton.innerText === IMPOSSIBLE) {
    wordList = cheatingModeSubmit({
      guesses, 
      guess: guessWord, 
      wordList, 
      guessHints, 
      guessList, 
      successNode, 
      submit, 
      input
    })
  } 
  else {
    normalModeSubmit({
      guess: guessWord,
      solution: wordList[wordIndex],
      guessHints,
      guessList,
      guesses,
      successNode,
      submit,
      input
    });
  };

  input.value = '';

  languageButton.disabled = true;
  modeButton.disabled = true;
};

document.onkeydown = e => {
  if(e.key === 'Enter'){
    onSubmit();
  }
};

submit.addEventListener('click', onSubmit);

// Add functionality to choose language menu
// TODO: figure out 'select' styling and replace the buttons with select
const languageChoices = [...languageOptions.getElementsByTagName('button')];
onSelectClick(languageButton, languageChoices, guesses.length === 0, setWordList);

// Add functionality to choose mode menu
// TODO: figure out 'select' styling and replace the buttons with select
const modeChoices = [...modeOptions.getElementsByTagName('button')];
onSelectClick(modeButton, modeChoices, guesses.length === 0, setWordList);

// Set the initial word list
setWordList();