import { displayGuesses } from "./displayGuesses.js";
import { handleSolution } from "./handleSolution.js";

export const cheatingModeSubmit = ({guesses, guess, wordList, guessHints, guessList, successNode, submit, input}) => {
  var solution;
  var indexAfter = wordList.length;

  console.log(wordList.length);

  // get Guess index / indices 
  const indexMatch = wordList.findIndex(word => word === guess);
  if (indexMatch === -1) {
    for (var i = 0; i < wordList.length; i++) {
      if (wordList[i] > guess) {
        indexAfter = i;
        break;
      };
    };
  }

  // Change the wordlist to be a shortened wordlist
  if (indexMatch !== -1) {
    if (indexMatch > wordList.length / 2) {
      wordList = wordList.slice(0, indexMatch);
      guessHints.push('b');
    }
    else {
      wordList = wordList.slice(indexMatch + 1, wordList.length);
      guessHints.push('a');
    }
  }
  else if (indexAfter !== 0 && indexAfter !== wordList.length) {
    if (indexAfter > wordList.length / 2) {
      wordList = wordList.slice(0, indexAfter);
      guessHints.push('b');
    }
    else {
      wordList = wordList.slice(indexAfter, wordList.length);
      guessHints.push('a');
    }
  };

  // If new wordList has length 0, success!
  if (wordList.length === 0) {
    handleSolution(guessHints, successNode, submit, input); 
    solution = guess;
  }

  // create applicable nodes
  displayGuesses(guesses, guess, guessList, guessHints, solution)

  console.log(wordList[0]);
  console.log(wordList[wordList.length - 1])
  return wordList;
}