import getLetterPriority from "../day-3/getLetterPriority";

describe("getLetterPriority test cases", () => {
  test("get priority for a equal 1", () => {
    expect(getLetterPriority("a")).toBe(1);
  });
  test("get priority for b equal 2", () => {
    expect(getLetterPriority("b")).toBe(2);
  });
  test("get priority for z equal 26", () => {
    expect(getLetterPriority("z")).toBe(26);
  });
  test("get priority for A equal 27", () => {
    expect(getLetterPriority("A")).toBe(27);
  });
  test("get priority for c equal 29", () => {
    expect(getLetterPriority("C")).toBe(29);
  });
});
