import { getCrtLine } from "../day-10/part-two";

test("crtLine", async () => {
  const line = await getCrtLine("test-data.txt", 0, 39);
  const expectedLine = "##..##..##..##..##..##..##..##..##..##..";
  expect(line).toBe(expectedLine);
  expect(line.length).toBe(expectedLine.length);
  const line40 = await getCrtLine("test-data.txt", 40, 79);
  const expectedLine40 = "###...###...###...###...###...###...###.";
  expect(line40).toBe(expectedLine40);
  expect(line40.length).toBe(expectedLine40.length);
  const line80 = await getCrtLine("test-data.txt", 80, 119);
  const expectedLine80 = "####....####....####....####....####....";
  expect(line80).toBe(expectedLine80);
  expect(line80.length).toBe(expectedLine80.length);
});

test("crtLine", async () => {
  const line1 = await getCrtLine("input.txt", 0, 39);
  const line2 = await getCrtLine("input.txt", 40, 79);
  const line3 = await getCrtLine("input.txt", 80, 119);
  const line4 = await getCrtLine("input.txt", 120, 159);
  const line5 = await getCrtLine("input.txt", 160, 199);
  const line6 = await getCrtLine("input.txt", 200, 239);

  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line4);
  console.log(line5);
  console.log(line6);
});
