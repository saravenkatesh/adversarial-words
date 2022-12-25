import { displayGuesses } from "./displayGuesses.js";
import { handleSolution } from "./handleSolution.js";

export const normalModeSubmit = ({guess, solution, guessHints, guesses, guessList, successNode, submit, input}) => {
  if (guess === solution) {
    handleSolution(guessHints, successNode, submit, input);
  };
  if (guess < solution) {
    guessHints.push('a');
  };
  if (guess > solution) {
    guessHints.push('b');
  };
  
  displayGuesses(guesses, guess, guessList, guessHints, solution);
};


