import { detectStartMarker, detectStartMessage } from "../day-6/day-6";

test("check test day function", () => {
  expect(detectStartMarker("test-data.txt")).toBe(5);
});

test("check test day function", () => {
  expect(detectStartMessage("test-data.txt")).toBe(5);
});
