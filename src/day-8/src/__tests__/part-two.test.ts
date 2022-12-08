import {
  getScenicScoreBottom,
  getScenicScoreLeft,
  getScenicScoreRight,
  getScenicScoreTop,
  getTopScenicTreeScores,
} from "../day-8/part-2";

test("check part two test data", async () => {
  const score = await getTopScenicTreeScores("test-data.txt");

  expect(score).toBe(8);
});

test("check part two input data", async () => {
  const score = await getTopScenicTreeScores("input.txt");

  expect(score).toBe(211680);
});

test("getScenicScoreLeft", () => {
  expect(getScenicScoreLeft(sut, 1, 2)).toBe(1);
});

test("getScenicScoreLeft", () => {
  expect(getScenicScoreLeft(sut, 3, 2)).toBe(2);
});

test("getScenicScoreLeft", () => {
  expect(getScenicScoreLeft(sut, 2, 3)).toBe(1);
});

////////

test("getScenicScoreRight", () => {
  expect(getScenicScoreRight(sut, 1, 2)).toBe(2);
});

//

test("getScenicScoreTop", () => {
  expect(getScenicScoreTop(sut, 1, 2)).toBe(1);
});

test("getScenicScoreTop", () => {
  expect(getScenicScoreTop(sut, 2, 3)).toBe(2);
});

test("getScenicScoreTop", () => {
  expect(getScenicScoreTop(sut, 3, 3)).toBe(3);
});

test("getScenicScoreTop", () => {
  expect(getScenicScoreTop(sut, 2, 2)).toBe(1);
});

//

test("getScenicScoreBottom", () => {
  expect(getScenicScoreBottom(sut, 1, 2)).toBe(2);
});

var sut = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

beforeEach(() => {
  sut = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0],
  ];
});
