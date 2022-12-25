import { ENGLISH, GERMAN, EASIER, HARDER, IMPOSSIBLE } from "./constants/choices.js";
import { EASIER_WORD_LIST } from "./constants/easierWordList.js";
import { CORNCOB_WORD_LIST } from "./constants/harderWordList.js";
import { EASIER_GERMAN_WORD_LIST } from "./constants/easierGermanWordList.js";

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
    [IMPOSSIBLE]: CORNCOB_WORD_LIST,
  },
  [GERMAN]: {
    [EASIER]: EASIER_GERMAN_WORD_LIST,
    [HARDER]: EASIER_GERMAN_WORD_LIST,
    [IMPOSSIBLE]: EASIER_GERMAN_WORD_LIST,
  },
};