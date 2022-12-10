import { readFile } from "../day-9/engine";
import testDay from "../day-9/part-one";

test("check test day function", () => {
  expect(testDay()).toBe("test");
});

test("check engine with test Data", async () => {
  expect(await readFile("test-data.txt")).toBe(13);
});

test("check engine with test Data", async () => {
  expect(await readFile("input.txt")).toBe(13);
});
