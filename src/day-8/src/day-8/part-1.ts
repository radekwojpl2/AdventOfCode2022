import { FileName, readFile } from "./common";

const getAllVisibleTrees = async (fileName: FileName) => {
  const trees = await readFile(fileName);

  const visibleInside = getVisibleTreesInsideForest(trees);
  const visibleEdge = getVisibleTreesOnEdge(trees);

  return visibleInside + visibleEdge;
};

const getVisibleTreesOnEdge = (trees: number[][]) =>
  trees.length * 2 + trees[1].length * 2 - 4;

const getVisibleTreesInsideForest = (trees: number[][]) => {
  let counter = 0;

  for (let i = 1; i < trees.length - 1; i++) {
    for (let j = 1; j < trees[i].length - 1; j++) {
      const right = isTreeVisibleRight(trees, i, j);
      const left = isTreeVisibleLeft(trees, i, j);
      const bottom = isTreeVisibleBottom(trees, i, j);
      const top = isTreeVisibleTop(trees, i, j);

      if (right || left || bottom || top) {
        counter++;
      }
    }
  }
  return counter;
};

export const isTreeVisibleRight = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  const tree = trees[xIndex][yIndex];
  const higherOrEqualTrees = trees[xIndex]
    .slice(yIndex + 1)
    .filter((current) => current >= tree);

  if (higherOrEqualTrees.length) return false;
  return true;
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
  return true;
};

export const isTreeVisibleTop = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  let anyBigger: boolean[] = [];
  for (let i = xIndex - 1; i >= 0; i--) {
    if (trees[xIndex][yIndex] <= trees[i][yIndex]) {
      anyBigger.push(false);
    }
  }

  if (anyBigger.length) return false;
  return true;
};

export const isTreeVisibleBottom = (
  trees: number[][],
  xIndex: number,
  yIndex: number
) => {
  let anyBigger: boolean[] = [];
  for (let i = xIndex + 1; i < trees[xIndex].length; i++) {
    if (trees[xIndex][yIndex] <= trees[i][yIndex]) {
      anyBigger.push(false);
    }
  }

  if (anyBigger.length) return false;
  return true;
};

export default getAllVisibleTrees;
