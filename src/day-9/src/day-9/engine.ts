import { reverse } from "dns";
import fs from "fs";
import readline from "readline";
import { Direction, makeAMove, Move, Point } from "./part-one";

export type FileName = "input.txt" | "test-data.txt";

export const readFile = async (fileName: FileName): Promise<number> => {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let head: Point = { x: 0, y: 0 };
  let tail: Point = { x: 0, y: 0 };

  const headPositionPerMove: Point[] = [];
  const tailPositionPerMove: Point[] = [];

  for await (const line of rl) {
    const move = parsLineToMove(line);

    const { heads, tails } = makeAMove(move, head, tail);

    console.log("move", move, "heads", heads, "tails", tails);

    heads.forEach((element) => {
      headPositionPerMove.push(element);
    });

    tails.forEach((element) => {
      if (element) {
        tailPositionPerMove.push(element);
      }
    });

    head = headPositionPerMove[headPositionPerMove.length - 1];
    tail = tailPositionPerMove[tailPositionPerMove.length - 1];
  }

  const uniqueTails = new Set<string>(
    ...tailPositionPerMove.map((x) => `${x.x}${x.y}`)
  );
  console.log(
    "unique",
    tailPositionPerMove
      .map((x) => `${x.x}${x.y}`)
      .filter((v, i, a) => a.indexOf(v) === i).length
  );

  return Promise.resolve(
    tailPositionPerMove.filter((v, i, a) => a.indexOf(v) === i).length
  );
};

const parsLineToMove = (line: string): Move => {
  const tmp = line.split(" ");
  return { direction: tmp[0] as unknown as Direction, steps: Number(tmp[1]) };
};
