import { makeAMove } from "../day-9/part-one";

test("make a move to right", () => {
  makeAMove({ direction: "R", steps: 4 }, { x: 0, y: 0 }, { x: 0, y: 0 });
});

// test("make a move to left tail and head align", () => {
//   makeAMove({ direction: "L", steps: 4 }, { x: 4, y: 0 }, { x: 4, y: 0 });
// });

// test("make a move to left tail and head NOT align", () => {
//   makeAMove({ direction: "L", steps: 4 }, { x: 4, y: 0 }, { x: 4, y: 1 });
// });

// test("make a move to top tail and head align", () => {
//   const sut = makeAMove(
//     { direction: "U", steps: 4 },
//     { x: 0, y: 0 },
//     { x: 0, y: 0 }
//   );
// });

// test("make a move to bottom tail and head align", () => {
//   const sut = makeAMove(
//     { direction: "D", steps: 4 },
//     { x: 0, y: 0 },
//     { x: 0, y: 0 }
//   );

//   expect(sut.heads).toStrictEqual([
//     { x: 0, y: -1 },
//     { x: 0, y: -2 },
//     { x: 0, y: -3 },
//     { x: 0, y: -4 },
//   ]);

//   expect(sut.tails).toStrictEqual([
//     { x: 0, y: -1 },
//     { x: 0, y: -2 },
//     { x: 0, y: -3 },
//   ]);
// });
