const findLetterDuplicateInRow = (row: string) => {
  const compartments = splitInTwoCompartments(row);

  for (const letter of compartments[0]) {
    if (isWordContainsLetter(compartments[1], letter)) {
      return letter;
    }
  }
};

const findCommonElfLetterInThreeRows = (rows: string[]) => {
  if (rows.length > 3) throw new Error("Too much rows");

  const referenceRow = rows[0];

  for (const letter of referenceRow) {
    if (
      isWordContainsLetter(rows[1], letter) &&
      isWordContainsLetter(rows[2], letter)
    ) {
      return letter;
    }
  }
};

export { findLetterDuplicateInRow, findCommonElfLetterInThreeRows };

function isWordContainsLetter(compartments: string, letter: string) {
  return compartments.search(letter) !== -1;
}

function splitInTwoCompartments(row: string) {
  const index = row.length / 2;

  const result = [row.slice(0, index), row.slice(index)];

  return result;
}
