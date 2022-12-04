import { getRowInfo, getRowInfoPartTwo } from "../day-3/day-3";

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

describe("input data test case for part two", () => {
  test("check input.txt file", () => {
    return getRowInfoPartTwo("test-data.txt").then((x) => {
      const result = x
        .map((z) => z.priority)
        .reduce((acc, curr) => acc + curr, 0);

      expect(result).toBe(70);
    });
  });
});

describe("input data case for part two", () => {
  test("check input.txt file", () => {
    return getRowInfoPartTwo("input.txt").then((x) => {
      const result = x
        .map((z) => z.priority)
        .reduce((acc, curr) => acc + curr, 0);

      expect(result).toBe(2650);
    });
  });
});
