import { Direction, keepUpTailToHead } from "../day-9/part-one";
import { pointFactory } from "./isTailInHeadRange.test";

[
  { direction: "U", tail: { x: 1, y: 0 }, expected: { x: 2, y: 1 } },
  { direction: "R", tail: { x: 0, y: 1 }, expected: { x: 1, y: 2 } },
  { direction: "L", tail: { x: 4, y: 2 }, expected: { x: 3, y: 2 } },
  { direction: "D", tail: { x: 3, y: 4 }, expected: { x: 2, y: 3 } },
].map((x) => {
  const head = { x: 2, y: 2 };
  const direction = x.direction;
  const tail = x.tail;
  return test(`Get tail: ${tail}  tail position after keep up to head: ${JSON.stringify(
    head
  )}`, () => {
    expect(keepUpTailToHead(direction as Direction, tail, head)).toStrictEqual(
      x.expected
    );
  });
});
