import { FileName, readFile } from "./common";

export const getTopScenicTreeScores = async (fileName: FileName) => {
  const trees = await readFile(fileName);

  const scenicScorePerTree = getScenicScoreTreesInsideForest(trees);

  return scenicScorePerTree.sort((a, b) => b - a)[0];
};

const getScenicScoreTreesInsideForest = (trees: number[][]) => {
  let result: number[] = [];

  for (let i = 1; i < trees.length - 1; i++) {
    for (let j = 1; j < trees[i].length - 1; j++) {
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
  xIndex: number,
  yIndex: number
) => {
  const selectedTree = trees[xIndex][yIndex];
  const treesToRight = trees[xIndex].slice(yIndex + 1);

  var score = 0;

  for (let i = 0; i < treesToRight.length; i++) {
    if (selectedTree <= treesToRight[i]) {
      score++;
      break;
    }
    score++;
  }

  return score;
};

export const getScenicScoreLeft = (
  trees: number[][],
  xIndex: number,
  yIndex: number
): number => {
  const selectedTree = trees[xIndex][yIndex];
  const treesToLeft = trees[xIndex].slice(0, yIndex);
  var score = 0;

  for (let i = treesToLeft.length - 1; i >= 0; i--) {
    if (selectedTree <= treesToLeft[i]) {
      score++;
      break;
    }
    score++;
  }

  return score;
};

export const getScenicScoreTop = (
  trees: number[][],
  xIndex: number,
  yIndex: number
): number => {
  var score = 0;
  const selectedTree = trees[xIndex][yIndex];

  for (let i = xIndex - 1; i >= 0; i--) {
    if (selectedTree <= trees[i][yIndex]) {
      score++;
      break;
    }
    score++;
  }

  return score;
};

export const getScenicScoreBottom = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  var score = 0;
  const selectedTree = trees[xIndex][yIndex];

  for (let i = xIndex + 1; i < trees[xIndex].length; i++) {
    if (selectedTree <= trees[i][yIndex]) {
      score++;
      break;
    }
    score++;
  }

  return score;
};
