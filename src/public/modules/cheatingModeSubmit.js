import { handleSolution } from "./handleSolution.js";

export const cheatingModeSubmit = ({guess, wordList, guessHints, successNode, submit, input}) => {
  // get Guess index / indices 

  // Randomly decide lower or higher (if possible)

  // change wordList to be a shortened wordList

  // If new wordList has length 0, success!
  if (wordList.length === 0) {
    handleSolution(guesHints, successNode, submit, input); 
  }

  // create applicable nodes
}