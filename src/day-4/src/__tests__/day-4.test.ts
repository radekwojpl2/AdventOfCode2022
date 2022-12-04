import {
  getSumOfContainingRanges,
  AssignmentPair,
  isFullyContained,
  mapInputStringToAssignmentPair,
  isNotOverlap,
  getPairThatNotOverLap,
} from "../day-4/day-4";

test("check part one test data", () => {
  expect(getSumOfContainingRanges("test-data.txt")).toBe(2);
});

test("check test day function", () => {
  expect(getSumOfContainingRanges("input.txt")).toBe(507);
});

describe("is fully contained test cases", () => {
  test("is assignment 2-8 contains 3-7", () => {
    expect(
      isFullyContained({
        first: { start: 2, end: 8 },
        second: { start: 3, end: 7 },
      })
    ).toBeTruthy();
  });

  test("is assignment 6-6 contains 4-6", () => {
    expect(
      isFullyContained({
        first: { start: 6, end: 6 },
        second: { start: 4, end: 6 },
      })
    ).toBeTruthy();
  });

  test("is assignment 6-6 contains 6-6", () => {
    expect(
      isFullyContained({
        first: { start: 6, end: 6 },
        second: { start: 6, end: 6 },
      })
    ).toBeTruthy();
  });

  test("is assignment 1-6 contains 1-6", () => {
    expect(
      isFullyContained({
        first: { start: 1, end: 6 },
        second: { start: 1, end: 6 },
      })
    ).toBeTruthy();
  });

  test("is assignment 5-5 contains 4-32", () => {
    expect(
      isFullyContained({
        first: { start: 5, end: 5 },
        second: { start: 4, end: 32 },
      })
    ).toBeTruthy();
  });

  test("is assignment 3-6 contains 5-7", () => {
    expect(
      isFullyContained({
        first: { start: 3, end: 6 },
        second: { start: 5, end: 7 },
      })
    ).toBe(false);
  });

  test("is assignment 31-69 contains 1-69", () => {
    expect(
      isFullyContained({
        first: { start: 31, end: 69 },
        second: { start: 1, end: 69 },
      })
    ).toBe(true);
  });
});

test("parse 30-31,9-19", () => {
  const result: AssignmentPair = {
    first: { start: 30, end: 31 },
    second: { start: 9, end: 19 },
  };
  expect(mapInputStringToAssignmentPair("30-31,9-19")).toStrictEqual(result);
});
