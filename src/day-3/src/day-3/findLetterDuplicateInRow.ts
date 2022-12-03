const findLetterDuplicateInRow = (row: string) => {
  const compartmentDivider = row.length / 2;

  const compartments = split(row, compartmentDivider);

  for (const letter of compartments[0]) {
    if (compartments[1].search(letter) !== -1) {
      return letter;
    }
  }
};

const findCommonElfLetterInThreeRows = (rows: string[]) => {
  if (rows.length > 3) throw new Error("Too much rows");

  const referenceRow = rows[0];

  console.log(referenceRow);

  for (const letter of referenceRow) {
    if (rows[1].search(letter) !== -1 && rows[2].search(letter) !== -1) {
      return letter;
    }
  }
};

export { findLetterDuplicateInRow, findCommonElfLetterInThreeRows };

function split(row: string, index: number) {
  const result = [row.slice(0, index), row.slice(index)];

  return result;
}
