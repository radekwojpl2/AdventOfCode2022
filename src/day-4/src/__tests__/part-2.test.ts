import { getPairThatNotOverLap, isNotOverlap } from "../day-4/day-4";

test("check part two test data", () => {
  expect(getPairThatNotOverLap("test-data.txt")).toBe(4);
});

test("check part two test data", () => {
  expect(getPairThatNotOverLap("input.txt")).toBe(897);
});

test("is not over lapp 2-4 contains 6-8", () => {
  expect(
    isNotOverlap({
      first: { start: 2, end: 4 },
      second: { start: 6, end: 8 },
    })
  ).toBe(true);
});

test("is not over lapp 6-8 contains 2-4", () => {
  expect(
    isNotOverlap({
      first: { start: 6, end: 8 },
      second: { start: 2, end: 4 },
    })
  ).toBe(true);
});

test("is not over lapp 2-3 contains 4-5", () => {
  expect(
    isNotOverlap({
      first: { start: 2, end: 3 },
      second: { start: 4, end: 5 },
    })
  ).toBe(true);
});

test("is not over lapp 2-3 contains 5-5", () => {
  expect(
    isNotOverlap({
      first: { start: 2, end: 3 },
      second: { start: 5, end: 5 },
    })
  ).toBe(true);
});

test("is over lapp 5-7 contains 7-9", () => {
  expect(
    isNotOverlap({
      first: { start: 5, end: 7 },
      second: { start: 7, end: 9 },
    })
  ).toBe(false);
});

test("is over lapp 2-8 contains 3-7", () => {
  expect(
    isNotOverlap({
      first: { start: 2, end: 8 },
      second: { start: 3, end: 7 },
    })
  ).toBe(false);
});

test("is over lapp 6-6 contains 4-6", () => {
  expect(
    isNotOverlap({
      first: { start: 6, end: 6 },
      second: { start: 4, end: 6 },
    })
  ).toBe(false);
});

test("is over lapp 4-6 contains 4-4", () => {
  expect(
    isNotOverlap({
      first: { start: 4, end: 6 },
      second: { start: 4, end: 4 },
    })
  ).toBe(false);
});

test("is over lapp 2-6 contains 4-8", () => {
  expect(
    isNotOverlap({
      first: { start: 2, end: 6 },
      second: { start: 4, end: 8 },
    })
  ).toBe(false);
});
