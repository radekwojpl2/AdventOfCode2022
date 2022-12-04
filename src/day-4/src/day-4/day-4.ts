import fs, { read } from "fs";

const getSumOfContainingRanges = (fileName: FileName) => {
  const pairs: AssignmentPair[] = readFileSync(fileName).map(
    mapInputStringToAssignmentPair
  );

  var sum = pairs.map(isFullyContained).filter((x) => x === true).length;

  return sum;
};

const getPairThatNotOverLap = (fileName: FileName) => {
  const pairs: AssignmentPair[] = readFileSync(fileName).map(
    mapInputStringToAssignmentPair
  );

  var sum = pairs.map(isNotOverlap).filter((x) => x === false).length;

  return sum;
};

export { getSumOfContainingRanges, getPairThatNotOverLap };

type Assignment = { start: number; end: number };

export const mapInputStringToAssignmentPair = (
  input: string
): AssignmentPair => {
  const stringPair = input.split(",");

  const first = stringPair[0].split("-");
  const second = stringPair[1].split("-");

  return {
    first: { start: Number(first[0]), end: Number(first[1]) },
    second: { start: Number(second[0]), end: Number(second[1]) },
  };
};

export type AssignmentPair = { first: Assignment; second: Assignment };

export const isFullyContained = ({ first, second }: AssignmentPair) => {
  if (first.start <= second.start && first.end >= second.end) return true;
  if (first.start >= second.start && first.end <= second.end) return true;

  return false;
};

export const isNotOverlap = ({ first, second }: AssignmentPair) => {
  if (
    first.start < second.start &&
    first.end < second.end &&
    first.end < second.start
  ) {
    return true;
  }
  if (
    first.start > second.start &&
    first.end > second.end &&
    first.start > second.end
  ) {
    return true;
  }

  return false;
};

type FileName = "input.txt" | "test-data.txt";

const readFileSync = (fileName: FileName) => {
  const file = fs.readFileSync(`src/data/${fileName}`, {
    encoding: "utf8",
  });

  const result = file.split("\r\n");

  return result;
};
