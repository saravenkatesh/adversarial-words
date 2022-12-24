export const handleSolution = (guessHints, successNode, submit, input) => {
  guessHints.push('ab');
  const successDiv = document.createElement('div');
  const success = document.createTextNode('Success! Refresh the page to play again');
  successDiv.append(success);
  successNode.append(success);
  submit.disabled = true;
  input.disabled = true;
};