import { ENGLISH, EASIER, HARDER } from "./constants/choices";
import { EASIER_WORD_LIST } from "./constants/easierWordList";
import { CORNCOB_WORD_LIST } from "./constants/harderWordList";

export const onSelectClick = (target, options, clickCondition, afterClickAction) => {
  options.forEach(choice => {
    choice.addEventListener('click', () => {
      if (clickCondition) {
        target.innerText = choice.innerText;
        afterClickAction();
      };
    });
  });
}

export const choicesToWordList = {
  [ENGLISH]: {
    [EASIER]: EASIER_WORD_LIST,
    [HARDER]: CORNCOB_WORD_LIST,
  },
};