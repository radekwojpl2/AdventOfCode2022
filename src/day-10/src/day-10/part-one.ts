import fs from "fs";
import { type } from "os";
import readline from "readline";

const getSignals = async (fileName: FileName) => {
  const instructions = await readFile(fileName);

  return instructions;
};

export const getSignalSum = (instructions: Instruction[]) => {
  const signal20 = 20 * getCycleXValue(19, instructions);
  const signal60 = 60 * getCycleXValue(59, instructions);
  const signal100 = 100 * getCycleXValue(99, instructions);
  const signal140 = 140 * getCycleXValue(139, instructions);
  const signal180 = 180 * getCycleXValue(179, instructions);
  const signal220 = 220 * getCycleXValue(219, instructions);

  return signal20 + signal60 + signal100 + signal140 + signal180 + signal220;
};

export const getCycleXValue = (cycle: number, instructions: Instruction[]) => {
  const tmp = instructions.slice(0, cycle);

  return tmp.reduce((acc, curr) => curr.toAdd + acc, 1);
};

export type Instruction =
  | {
      type: "addx";
      cycles: 1;
      toAdd: number;
    }
  | { type: "noop"; cycles: 1; toAdd: 0 };

export default getSignals;

export type FileName = "input.txt" | "test-data.txt" | "test-data-small.txt";

export const readFile = async (fileName: FileName): Promise<Instruction[]> => {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const result: Instruction[] = [];

  for await (const line of rl) {
    const instructions = parseLineToInstruction(line);
    for (const instruction of instructions) {
      result.push(instruction);
    }
  }

  return Promise.resolve(result);
};

const parseLineToInstruction = (line: string): Instruction[] => {
  if (line == "noop") return [{ type: "noop", toAdd: 0, cycles: 1 }];
  else
    return [
      { type: "addx", toAdd: 0, cycles: 1 },
      { type: "addx", toAdd: Number(line.split(" ")[1]), cycles: 1 },
    ];
};
