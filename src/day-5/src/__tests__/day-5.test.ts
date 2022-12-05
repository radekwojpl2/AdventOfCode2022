import operateCrane90000, {
  CraneMove,
  makeCraneMove,
  parseCraneMove,
  makeCrane90001Move,
  operateCrane90001,
} from "../day-5/day-5";

let testCrateStack = [
  { index: 1, crate: ["Z", "N"] },
  { index: 2, crate: ["M", "C", "D"] },
  { index: 3, crate: ["P"] },
];

let cratesStack = [
  { index: 1, crate: ["D", "L", "V", "T", "M", "H", "F"] },
  { index: 2, crate: ["H", "Q", "G", "J", "C", "T", "N", "P"] },
  { index: 3, crate: ["R", "S", "D", "M", "P", "H"] },
  { index: 4, crate: ["L", "B", "V", "F"] },
  { index: 5, crate: ["N", "H", "G", "L", "Q"] },
  { index: 6, crate: ["W", "B", "D", "G", "R", "M", "P"] },
  { index: 7, crate: ["G", "M", "N", "R", "C", "H", "L", "Q"] },
  { index: 8, crate: ["C", "L", "W"] },
  { index: 9, crate: ["R", "D", "L", "Q", "J", "Z", "M", "T"] },
];

beforeEach(() => {
  testCrateStack = [
    { index: 1, crate: ["Z", "N"] },
    { index: 2, crate: ["M", "C", "D"] },
    { index: 3, crate: ["P"] },
  ];

  cratesStack = [
    { index: 1, crate: ["D", "L", "V", "T", "M", "H", "F"] },
    { index: 2, crate: ["H", "Q", "G", "J", "C", "T", "N", "P"] },
    { index: 3, crate: ["R", "S", "D", "M", "P", "H"] },
    { index: 4, crate: ["L", "B", "V", "F"] },
    { index: 5, crate: ["N", "H", "G", "L", "Q"] },
    { index: 6, crate: ["W", "B", "D", "G", "R", "M", "P"] },
    { index: 7, crate: ["G", "M", "N", "R", "C", "H", "L", "Q"] },
    { index: 8, crate: ["C", "L", "W"] },
    { index: 9, crate: ["R", "D", "L", "Q", "J", "Z", "M", "T"] },
  ];
});

test("check test day function", () => {
  return operateCrane90000("test-data.txt", testCrateStack).then((x) => {
    console.log(x.toString(), "tes");
    expect(x).toBe("C,M,Z");
  });
});

test("check test day function", () => {
  return operateCrane90001("test-data.txt", testCrateStack).then((x) => {
    console.log(x.toString(), "tes");
    expect(x).toBe("M,C,D");
  });
});

test("check test day function", () => {
  return operateCrane90000("input.txt", cratesStack).then((x) => {
    expect(x).toBe("H,N,S,N,M,T,L,H,Q");
  });
});

test("check test day function", () => {
  return operateCrane90001("input.txt", cratesStack).then((x) => {
    expect(x).toBe("H,N,S,N,M,T,L,H,Q");
  });
});

const craneMoveFactory = (x: number, y: number, z: number) => ({
  move: x,
  from: y,
  to: z,
});

describe("parse crane move test cases ", () => {
  [
    { row: "move 1 from 7 to 6", equal: craneMoveFactory(1, 7, 6) },
    { row: "move 10 from 6 to 9", equal: craneMoveFactory(10, 6, 9) },
  ].map((x) => {
    expect(parseCraneMove(x.row)).toStrictEqual(x.equal);
  });
});

describe("crane move test cases", () => {
  test("test", () => {
    const move = makeCraneMove(craneMoveFactory(1, 1, 2), testCrateStack);

    console.log(move, "move");

    expect(move.from).toStrictEqual(["Z"]);
    expect(move.to).toStrictEqual(["M", "C", "D", "N"]);
  });
});
