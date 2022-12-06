import fs from "fs";

type FileName = "input.txt" | "test-data.txt";

const detectStartMarker = (fileName: FileName) => {
  const contents = fs.readFileSync(`src/data/${fileName}`, {
    encoding: "utf-8",
  });

  const stream = contents.toString();

  var result: number = 0;

  for (let i = 0; i < stream.length - 4; i++) {
    if (new Set(Array.from(stream.slice(i, i + 4))).size === 4) {
      return (result = i + 4);
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

 for (let i = 0; i < stream.length - 14; i++) {
    if (new Set(Array.from(stream.slice(i, i + 14))).size === 14) {
      return (result = i + 14);
    }
  }

  return result;
};

export { detectStartMarker, detectStartMessage };
