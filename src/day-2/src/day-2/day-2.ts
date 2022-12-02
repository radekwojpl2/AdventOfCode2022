import fs from "fs";
import readline from "readline";

type FileName = "input.txt" | "test-data.txt";

async function getMyScore(fileName: FileName): Promise<PlayInfo[]> {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const result: PlayInfo[] = [];

  for await (const line of rl) {
    result.push(getSinglePlayInfo(line as MovesVariation));
  }

  return Promise.resolve(result);
}

async function getMyScorePartTwo(fileName: FileName): Promise<PlayInfo[]> {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const result: PlayInfo[] = [];

  for await (const line of rl) {
    result.push(getSinglePlayInfoPartTwo(line as MovesVariation));
  }

  return Promise.resolve(result);
}

export { getMyScore, getMyScorePartTwo };
// 123
type ElfMoves = "A" | "B" | "C";
type MyMove = "Y" | "X" | "Z";

type MovesVariation = `${ElfMoves} ${MyMove}`;

type PlayInfo = {
  win: "elf" | "me" | "draw";
  pointsPerMove: 1 | 2 | 3;
  matchPoints: 0 | 3 | 6;
};

const getSinglePlayInfo = (singlePlay: MovesVariation): PlayInfo => {
  switch (singlePlay) {
    //    elf  you
    //    ROCK ROCK
    //    ROCK PAPER
    //    ROCK Scissors
    case "A X":
      return { win: "draw", pointsPerMove: 1, matchPoints: 3 };
    case "A Y":
      return { win: "me", pointsPerMove: 2, matchPoints: 6 };
    case "A Z":
      return { win: "elf", pointsPerMove: 3, matchPoints: 0 };

    //    elf  you
    //    PAPER ROCK
    //    PAPER PAPER
    //    PAPER Scissors
    case "B X":
      return { win: "elf", pointsPerMove: 1, matchPoints: 0 };
    case "B Y":
      return { win: "draw", pointsPerMove: 2, matchPoints: 3 };
    case "B Z":
      return { win: "me", pointsPerMove: 3, matchPoints: 6 };

    //    elf  you
    //    Scissors ROCK
    //    Scissors PAPER
    //    Scissors Scissors
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
    //    elf  you  xloose, ydraw, zwin
    //    ROCK ROCK 1
    //    ROCK PAPER 2
    //    ROCK Scissors 3
    case "A X":
      return { win: "elf", pointsPerMove: 3, matchPoints: 0 };
    case "A Y":
      return { win: "draw", pointsPerMove: 1, matchPoints: 3 };
    case "A Z":
      return { win: "me", pointsPerMove: 2, matchPoints: 6 };

    //    elf  you  xloose, ydraw, zwin
    //    PAPER ROCK 1
    //    PAPER PAPER 2
    //    PAPER Scissors 3
    case "B X":
      return { win: "elf", pointsPerMove: 1, matchPoints: 0 };
    case "B Y":
      return { win: "draw", pointsPerMove: 2, matchPoints: 3 };
    case "B Z":
      return { win: "me", pointsPerMove: 3, matchPoints: 6 };

    //    elf  you  xloose, ydraw, zwin
    //    Scissors ROCK 1
    //    Scissors PAPER 2
    //    Scissors Scissors 3
    case "C X":
      return { win: "elf", pointsPerMove: 2, matchPoints: 0 };
    case "C Y":
      return { win: "draw", pointsPerMove: 3, matchPoints: 3 };
    case "C Z":
      return { win: "me", pointsPerMove: 1, matchPoints: 6 };
  }
};
