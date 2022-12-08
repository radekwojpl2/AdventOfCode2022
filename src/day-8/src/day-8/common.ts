import fs from "fs";
import readline from "readline";

export type FileName = "input.txt" | "test-data.txt";

export const readFile = async (fileName: FileName): Promise<number[][]> => {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const result: number[][] = [];

  for await (const line of rl) {
    const subResult: number[] = [];
    for (const char of line) {
      subResult.push(Number(char));
    }
    result.push(subResult);
  }

  return Promise.resolve(result);
};
