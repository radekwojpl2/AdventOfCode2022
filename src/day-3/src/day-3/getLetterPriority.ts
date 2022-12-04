const upperCaseOffset = 38;
const loweCaseOffset = 96;

const getLetterPriority = (letter: string): number => {
  if (isLetterUpperCase()) {
    return letter.charCodeAt(0) - upperCaseOffset;
  } else {
    return letter.charCodeAt(0) - loweCaseOffset;
  }

  function isLetterUpperCase() {
    return letter.toUpperCase() == letter;
  }
};

export default getLetterPriority;
