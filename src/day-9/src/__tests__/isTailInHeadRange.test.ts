import { Point, isTailInHeadRange } from "../day-9/part-one";

export const pointFactory = (x: number, y: number): Point => ({ x: x, y: y });

[
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
].map((x) => {
  const head = { x: 1, y: 1 };
  test(`isTailInHeadRange tail: ${x}, head: ${JSON.stringify(head)}`, () => {
    const tail = pointFactory(x[0], x[1]);

    expect(isTailInHeadRange(tail, head)).toBe(true);
  });
});

[
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
].map((x) => {
  const head = { x: 1, y: 1 };
  test(`Tail IS In Head Range tail: ${x}, head: ${JSON.stringify(
    head
  )}`, () => {
    const tail = pointFactory(x[0], x[1]);

    expect(isTailInHeadRange(tail, head)).toBe(true);
  });
});

[
  [-1, 0],
  [-1, 1],
  [-1, 2],
  [-1, 3],
  [3, 0],
  [3, 1],
  [3, 2],
  [2, 6],
  [2, 7],
  [2, 8],
].map((x) => {
  const head = { x: 1, y: 1 };
  test(`Tail IS NOT In Head Range tail: ${x}, head: ${JSON.stringify(
    head
  )}`, () => {
    const tail = pointFactory(x[0], x[1]);

    expect(isTailInHeadRange(tail, head)).toBe(false);
  });
});
