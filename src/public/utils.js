export const onSelectClick = (target, options, clickCondition) => {
  options.forEach(choice => {
    choice.addEventListener('click', () => {
      if (clickCondition) {
        target.innerText = choice.innerText;
      };
    });
  });
}