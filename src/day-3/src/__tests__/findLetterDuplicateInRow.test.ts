import { findLetterDuplicateInRow } from "../day-3/findLetterDuplicateInRow";

describe("findLetterDuplicateInRow test cases", () => {
  [
    { row: "vJrwpWtwJgWrhcsFMMfFFhFp", letter: "p" },
    { row: "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", letter: "L" },
    { row: "PmmdzqPrVvPwwTWBwg", letter: "P" },
    { row: "ttgJtRGJQctTZtZT", letter: "t" },
  ].map((x) =>
    test(`duplicate in row ${x.row} in letter ${x.letter}`, () => {
      expect(findLetterDuplicateInRow(x.row)).toBe(x.letter);
    })
  );
});
