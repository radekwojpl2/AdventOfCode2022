const findLetterDuplicateInRow = (row: string) => {
  const compartmentDivider = row.length / 2;

  const compartments = split(row, compartmentDivider);

  for (const letter of compartments[0]) {
    if (compartments[1].search(letter) !== -1) {
      return letter;
    }
  }
};

export default findLetterDuplicateInRow;

function split(row: string, index: number) {
  const result = [row.slice(0, index), row.slice(index)];

  return result;
}
