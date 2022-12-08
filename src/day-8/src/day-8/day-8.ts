import fs from "fs";
import readline from "readline";

const getAllVisibleTrees = async (fileName: FileName) => {
  const trees = await readFile(fileName);

  const visibleInside = getVisibleTreesInsideForest(trees);
  const visibleEdge = getVisibleTreesOnEdge(trees);

  return visibleInside + visibleEdge;
};

export const getTopScenicTreeScores = async (fileName: FileName) => {
  const trees = await readFile(fileName);

  const visibleInside = getScenicScoreTreesInsideForest(trees);

  return visibleInside.sort((a, b) => b - a)[0];
};

const getVisibleTreesOnEdge = (trees: number[][]) =>
  trees.length * 2 + trees[1].length * 2 - 4;

const getVisibleTreesInsideForest = (trees: number[][]) => {
  let counter = 0;

  for (let i = 1; i < trees.length - 1; i++) {
    for (let j = 1; j < trees[i].length - 1; j++) {
      const tree = trees[i][j];

      const right = isTreeVisibleRight(trees, i, j);
      const left = isTreeVisibleLeft(trees, i, j);
      const bottom = isTreeVisibleBottom(trees, i, j);
      const top = isTreeVisibleTop(trees, i, j);

      if (right || left || bottom || top) {
        counter = counter + 1;
      }
    }
  }
  return counter;
};

const getScenicScoreTreesInsideForest = (trees: number[][]) => {
  let result: number[] = [];

  for (let i = 1; i < trees.length - 1; i++) {
    for (let j = 1; j < trees[i].length - 1; j++) {
      const tree = trees[i][j];

      const right = getScenicScoreRight(trees, i, j);
      const left = getScenicScoreLeft(trees, i, j);
      const bottom = getScenicScoreBottom(trees, i, j);
      const top = getScenicScoreTop(trees, i, j);

      result.push(right * left * bottom * top);
    }
  }
  return result;
};

export const getScenicScoreRight = (
  trees: number[][],
  xIndex: number, //1
  yIndex: number //2
) => {
  const tree = trees[xIndex][yIndex];
  const treesToRight = trees[xIndex].slice(yIndex + 1);

  var score = 0;

  for (let i = 0; i < treesToRight.length; i++) {
    if (tree <= treesToRight[i]) {
      score++;
      break;
    }

    if (tree > treesToRight[i]) {
      score++;
    }
  }

  return score;
};

export const getScenicScoreLeft = (
  trees: number[][],
  xIndex: number,
  yIndex: number
): number => {
  const tree = trees[xIndex][yIndex];
  const treesToLeft = trees[xIndex].slice(0, yIndex);

  var score = 0;

  for (let i = treesToLeft.length - 1; i >= 0; i--) {
    if (tree <= treesToLeft[i]) {
      score++;
      break;
    }

    if (tree > treesToLeft[i]) {
      score++;
    }
  }

  return score;
};

export const getScenicScoreTop = (
  trees: number[][],
  xIndex: number,
  yIndex: number
): number => {
  var score = 0;
  const tree = trees[xIndex][yIndex];

  for (let i = xIndex - 1; i >= 0; i--) {
    if (tree <= trees[i][yIndex]) {
      score++;
      break;
    }

    if (tree > trees[i][yIndex]) {
      score++;
    }
  }

  return score;
};

export const getScenicScoreBottom = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  var score = 0;
  const tree = trees[xIndex][yIndex];

  for (let i = xIndex + 1; i < trees[xIndex].length; i++) {
    if (tree <= trees[i][yIndex]) {
      score++;
      break;
    }

    if (tree > trees[i][yIndex]) {
      score++;
    }
  }

  return score;
};

export const isTreeVisibleRight = (
  trees: number[][],
  xIndex: number, //1
  yIndex: number //2
) => {
  const tree = trees[xIndex][yIndex];
  const higherOrEqualTrees = trees[xIndex]
    .slice(yIndex + 1)
    .filter((current) => current >= tree);

  if (higherOrEqualTrees.length) return false;
  else return true;
};

export const isTreeVisibleLeft = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  const tree = trees[xIndex][yIndex];
  const higherOrEqualTrees = trees[xIndex]
    .slice(0, yIndex)
    .filter((current) => current >= tree);

  if (higherOrEqualTrees.length) return false;
  else return true;
};

export const isTreeVisibleTop = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  let isBigger: boolean[] = [];
  for (let i = xIndex - 1; i >= 0; i--) {
    if (trees[xIndex][yIndex] <= trees[i][yIndex]) {
      isBigger.push(false);
    }
  }

  if (isBigger.length) {
    return false;
  } else {
    return true;
  }
};

export const isTreeVisibleBottom = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  let isBigger: boolean[] = [];
  for (let i = xIndex + 1; i < trees[xIndex].length; i++) {
    if (trees[xIndex][yIndex] <= trees[i][yIndex]) {
      isBigger.push(false);
    }
  }

  if (isBigger.length) {
    return false;
  } else {
    return true;
  }
};

export type FileName = "input.txt" | "test-data.txt";

const readFile = async (fileName: FileName): Promise<number[][]> => {
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

export default getAllVisibleTrees;
