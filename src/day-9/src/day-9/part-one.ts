const testDay = () => {
  var result: string = "test";
  return result;
};

export const makeAMove = (
  move: Move,
  head: Point,
  tail: Point
): { heads: Point[]; tails: Point[] } => {
  const headPositionPerMove: Point[] = [];
  const tailPositionPerMove: Point[] = [];

  switch (move.direction) {
    case "R":
      for (let i = head.x + 1; i <= head.x + move.steps; i++) {
        const newHead = { x: i, y: head.y };
        headPositionPerMove.push(newHead);
        if (isTailInHeadRange(tail, newHead) == false) {
          const newTail = headPositionPerMove[headPositionPerMove.length - 2];
          tailPositionPerMove.push(newTail);
        }
      }
      return { heads: headPositionPerMove, tails: tailPositionPerMove };
    case "L":
      for (let i = head.x - 1; i >= head.x - move.steps; i--) {
        const newHead = { x: i, y: head.y };
        headPositionPerMove.push(newHead);
        if (isTailInHeadRange(tail, newHead) == false) {
          const newTail = headPositionPerMove[headPositionPerMove.length - 2];
          tailPositionPerMove.push(newTail);
        }
      }

      return { heads: headPositionPerMove, tails: tailPositionPerMove };

    case "U":
      for (let i = head.y + 1; i <= head.y + move.steps; i++) {
        const newHead = { x: head.x, y: i };
        headPositionPerMove.push(newHead);
        if (isTailInHeadRange(tail, newHead) == false) {
          const newTail = headPositionPerMove[headPositionPerMove.length - 2];
          tailPositionPerMove.push(newTail);
        }
      }
      return { heads: headPositionPerMove, tails: tailPositionPerMove };
    case "D":
      for (let i = head.y - 1; i >= head.y - move.steps; i--) {
        const newHead = { x: head.x, y: i };
        headPositionPerMove.push(newHead);
        if (isTailInHeadRange(tail, newHead) == false) {
          const newTail = headPositionPerMove[headPositionPerMove.length - 2];
          tailPositionPerMove.push(newTail);
        }
      }
      return { heads: headPositionPerMove, tails: tailPositionPerMove };
  }
};

export type Move = { direction: Direction; steps: number };

export type Point = { x: number; y: number };

export const isTailInHeadRange = (tail: Point, head: Point) => {
  if (Math.abs(head.x - tail.x) <= 1 && Math.abs(head.y - tail.y) <= 1)
    return true;

  return false;
};

export type Direction = "L" | "R" | "D" | "U";

export const keepUpTailToHead = (
  direction: Direction,
  tail: Point,
  head: Point
): Point => {
  // return head if i pass old head value here I have to move tail to old position SIMPLE AS THAT
  switch (direction) {
    case "U":
      return { x: head.x, y: tail.y + 1 };
    case "D":
      return { x: head.x, y: tail.y - 1 };
    case "R":
      return { x: tail.x + 1, y: head.y };
    case "L":
      return { x: tail.x - 1, y: head.y };
  }
};

export default testDay;
