const upperCaseOffset = 38;
const loweCaseOffset = 96;

const getLetterPriority = (letter: string): number => {
  if (letter.toUpperCase() == letter) {
    return letter.charCodeAt(0) - upperCaseOffset;
  } else {
    return letter.charCodeAt(0) - loweCaseOffset;
  }
};

export default getLetterPriority;
