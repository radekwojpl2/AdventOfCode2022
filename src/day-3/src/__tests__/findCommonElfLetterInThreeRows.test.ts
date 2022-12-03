import { findCommonElfLetterInThreeRows } from "../day-3/findLetterDuplicateInRow";

test("fine common letter in three rows", () => {
  expect(
    findCommonElfLetterInThreeRows([
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
    ])
  ).toBe("r");
});
