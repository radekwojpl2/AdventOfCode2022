import fs from "fs";
import readline from "readline";

type FileName = "input.txt" | "test-data.txt";

const operateCrane90000 = async (
  fileName: FileName,
  cratesStack: CrateStack[]
) => {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const move = parseCraneMove(line);
    const { from, to } = makeCraneMove(move, cratesStack);

    cratesStack[move.from - 1].crate = from;
    cratesStack[move.to - 1].crate = to;
  }

  return takeLastElement(cratesStack).toString();
};

export const operateCrane90001 = async (
  fileName: FileName,
  cratesStack: CrateStack[]
) => {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const move = parseCraneMove(line);
    const { from, to } = makeCrane90001Move(move, cratesStack);

    cratesStack[move.from - 1].crate = from;
    cratesStack[move.to - 1].crate = to;
  }

  return takeLastElement(cratesStack).toString();
};

const takeLastElement = (crateStack: CrateStack[]) => {
  return crateStack.map((x) => x.crate[x.crate.length - 1]);
};

export type CraneMove = { move: number; from: number; to: number };

export const parseCraneMove = (row: string): CraneMove => {
  const craneMove = row.match(/\d+/g);

  if (!craneMove) throw new Error("Moves not found");

  const getMove = (index: number) => Number(craneMove[index]);

  return { move: getMove(0), from: getMove(1), to: getMove(2) };
};

type CrateStack = { index: number; crate: string[] };

export const makeCraneMove = (
  { move, from, to }: CraneMove,
  crates: CrateStack[]
) => {
  const getCreate = (from: number) =>
    crates.find((x) => x.index === from)!.crate;

  const start = getCreate(from);
  const end = getCreate(to);

  for (let index = 0; index < move; index++) {
    end.push(start.pop()!);
  }

  return { from: start, to: end };
};

export const makeCrane90001Move = (
  { move, from, to }: CraneMove,
  crates: CrateStack[]
) => {
  const getCreate = (from: number) =>
    crates.find((x) => x.index === from)!.crate;

  const start = getCreate(from);
  const end = getCreate(to);

  let tmp = [];

  for (let index = 0; index < move; index++) {
    tmp.push(start.pop()!);
  }

  // tmp = tmp.reverse();

  for (let index = 0; index < move; index++) {
    end.push(tmp.pop()!);
  }

  return { from: start, to: end };
};

export default operateCrane90000;

// const cratesStack = [
//   { index: 1, crate: ["D", "L", "V", "T", "M", "H", "F"] },
//   { index: 2, crate: ["H", "Q", "G", "J", "C", "T", "N", "P"] },
//   { index: 3, crate: ["R", "S", "D", "M", "P", "H"] },
//   { index: 4, crate: ["L", "B", "V", "F"] },
//   { index: 5, crate: ["N", "H", "G", "L", "Q"] },
//   { index: 6, crate: ["W", "B", "D", "G", "R", "M", "P"] },
//   { index: 7, crate: ["G", "M", "N", "R", "C", "H", "L", "Q"] },
//   { index: 8, crate: ["C", "L", "W"] },
//   { index: 9, crate: ["R", "D", "L", "Q", "J", "Z", "M", "T"] },
// ];
