import fs from "fs";

type FileName = "input.txt" | "test-data.txt";

const detectStartMarker = (fileName: FileName) => {
  const file = readFile(fileName);

  return detectMarker(file, 4);
};

const detectStartMessage = (fileName: FileName) => {
  const file = readFile(fileName);

  return detectMarker(file, 14);
};

export { detectStartMarker, detectStartMessage };

const readFile = (fileName: FileName) => {
  const stream = fs.readFileSync(`src/data/${fileName}`, {
    encoding: "utf-8",
  });

  return stream.toString();
};

const detectMarker = (row: string, length: number) => {
  let result = 0;

  for (let i = 0; i < row.length - length; i++) {
    if (new Set(Array.from(row.slice(i, i + length))).size === length) {
      return (result = i + length);
    }
  }
};
