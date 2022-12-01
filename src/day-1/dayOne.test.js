import { jest } from "@jest/globals";
import getCaloriesPerElf from "./dayOne.js";

test("check for the last element in file", () => {
  return getCaloriesPerElf("test.txt").then((x) => {
    expect(x[x.length - 1]).toBe(30);
  });
});
