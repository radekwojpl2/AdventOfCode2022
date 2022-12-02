import fs from "fs";
import readline from "readline";

type FileName = "input.txt" | "test-data.txt";

async function getGameInfoPartOne(fileName: FileName): Promise<PlayInfo[]> {
  return getGameInfo(fileName, getSinglePlayInfo);
}

async function getGameInfoPartTwo(fileName: FileName): Promise<PlayInfo[]> {
  return getGameInfo(fileName, getSinglePlayInfoPartTwo);
}

export { getGameInfoPartOne, getGameInfoPartTwo };

type ElfMoves = "A" | "B" | "C";
type MyMove = "Y" | "X" | "Z";

type MovesVariation = `${ElfMoves} ${MyMove}`;

type PlayInfo = {
  win: "elf" | "me" | "draw";
  pointsPerMove: 1 | 2 | 3;
  matchPoints: 0 | 3 | 6;
};

async function getGameInfo(
  fileName: FileName,
  getPlayInfo: (singlePlay: MovesVariation) => PlayInfo
): Promise<PlayInfo[]> {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const result: PlayInfo[] = [];

  for await (const line of rl) {
    result.push(getPlayInfo(line as MovesVariation));
  }

  return Promise.resolve(result);
}

const getSinglePlayInfo = (singlePlay: MovesVariation): PlayInfo => {
  switch (singlePlay) {
    case "A X":
      return { win: "draw", pointsPerMove: 1, matchPoints: 3 };
    case "A Y":
      return { win: "me", pointsPerMove: 2, matchPoints: 6 };
    case "A Z":
      return { win: "elf", pointsPerMove: 3, matchPoints: 0 };
    case "B X":
      return { win: "elf", pointsPerMove: 1, matchPoints: 0 };
    case "B Y":
      return { win: "draw", pointsPerMove: 2, matchPoints: 3 };
    case "B Z":
      return { win: "me", pointsPerMove: 3, matchPoints: 6 };
    case "C X":
      return { win: "elf", pointsPerMove: 1, matchPoints: 6 };
    case "C Y":
      return { win: "elf", pointsPerMove: 2, matchPoints: 0 };
    case "C Z":
      return { win: "draw", pointsPerMove: 3, matchPoints: 3 };
  }
};

const getSinglePlayInfoPartTwo = (singlePlay: MovesVariation): PlayInfo => {
  switch (singlePlay) {
    case "A X":
      return { win: "elf", pointsPerMove: 3, matchPoints: 0 };
    case "A Y":
      return { win: "draw", pointsPerMove: 1, matchPoints: 3 };
    case "A Z":
      return { win: "me", pointsPerMove: 2, matchPoints: 6 };
    case "B X":
      return { win: "elf", pointsPerMove: 1, matchPoints: 0 };
    case "B Y":
      return { win: "draw", pointsPerMove: 2, matchPoints: 3 };
    case "B Z":
      return { win: "me", pointsPerMove: 3, matchPoints: 6 };
    case "C X":
      return { win: "elf", pointsPerMove: 2, matchPoints: 0 };
    case "C Y":
      return { win: "draw", pointsPerMove: 3, matchPoints: 3 };
    case "C Z":
      return { win: "me", pointsPerMove: 1, matchPoints: 6 };
  }
};
