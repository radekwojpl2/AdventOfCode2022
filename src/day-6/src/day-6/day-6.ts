import fs from "fs";

type FileName = "input.txt" | "test-data.txt";

const detectStartMarker = (fileName: FileName) => {
  const contents = fs.readFileSync(`src/data/${fileName}`, {
    encoding: "utf-8",
  });

  const stream = contents.toString();

  var result: number = 0;

  for (let i = 0; i < stream.length - 4; i++) {
    if (
      new Set([stream[i], stream[i + 1], stream[i + 2], stream[i + 3]]).size ===
      4
    ) {
      return (result = i + 3 + 1);
    }
  }

  return result;
};

const detectStartMessage = (fileName: FileName) => {
  const contents = fs.readFileSync(`src/data/${fileName}`, {
    encoding: "utf-8",
  });

  const stream = contents.toString();

  var result: number = 0;

  for (let i = 0; i < stream.length - 4; i++) {
    if (
      new Set([
        stream[i],
        stream[i + 1],
        stream[i + 2],
        stream[i + 3],
        stream[i + 4],
        stream[i + 5],
        stream[i + 6],
        stream[i + 7],
        stream[i + 8],
        stream[i + 9],
        stream[i + 10],
        stream[i + 11],
        stream[i + 12],
        stream[i + 13],
      ]).size === 14
    ) {
      return (result = i + 13 + 1);
    }
  }

  return result;
};

export { detectStartMarker, detectStartMessage };
