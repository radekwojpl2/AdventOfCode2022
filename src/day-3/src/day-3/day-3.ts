import fs from "fs";
import readline from "readline";
import findLetterDuplicateInRow from "./findLetterDuplicateInRow";
import getLetterPriority from "./getLetterPriority";

type RowInfo = { letter: string; priority: number };

type FileName = "input.txt" | "test-data.txt";

const getRowInfo = async (fileName: FileName): Promise<RowInfo[]> => {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const result: RowInfo[] = [];

  for await (const line of rl) {
    const letter = findLetterDuplicateInRow(line);
    if (!letter) throw new Error("Letter Not Found");
    const letterPriority = getLetterPriority(letter);
    result.push({ letter: letter, priority: letterPriority });
  }

  return Promise.resolve(result);
};

export default getRowInfo;
