import { getMyScore, getMyScorePartTwo } from "../day-2/day-2";

describe("part one", () => {
  test("check test data", () => {
    return getMyScore("test-data.txt").then((x) => {
      const result = x.map((z) => z.pointsPerMove + z.matchPoints);

      expect(result.reduce((prev, curr) => prev + curr, 0)).toBe(15);
    });
  });

  test("check input data", () => {
    return getMyScore("input.txt").then((x) => {
      const result = x.map((z) => z.pointsPerMove + z.matchPoints);

      expect(result.reduce((prev, curr) => prev + curr, 0)).toBe(14375);
    });
  });
});

describe("part two", () => {
  test("check test data", () => {
    return getMyScorePartTwo("test-data.txt").then((x) => {
      const result = x.map((z) => z.pointsPerMove + z.matchPoints);

      expect(result.reduce((prev, curr) => prev + curr, 0)).toBe(12);
    });
  });

  test("check input data", () => {
    return getMyScorePartTwo("input.txt").then((x) => {
      const result = x.map((z) => z.pointsPerMove + z.matchPoints);

      expect(result.reduce((prev, curr) => prev + curr, 0)).toBe(10274);
    });
  });
});
