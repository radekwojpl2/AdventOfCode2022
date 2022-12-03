import getRowInfo from "../day-3/day-3";

describe("test data test case", () => {
  test("check test-data.txt file", () => {
    return getRowInfo("test-data.txt").then((x) => {
      const result = x
        .map((z) => z.priority)
        .reduce((acc, curr) => acc + curr, 0);

      expect(result).toBe(157);
    });
  });
});

describe("input data test case", () => {
  test("check input.txt file", () => {
    return getRowInfo("input.txt").then((x) => {
      const result = x
        .map((z) => z.priority)
        .reduce((acc, curr) => acc + curr, 0);

      expect(result).toBe(7428);
    });
  });
});
