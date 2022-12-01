import getCaloriesPerElf from "./dayOne.js";

getCaloriesPerElf("input.txt").then((x) => {
  console.log(x.sort((a, b) => a - b)[x.length - 1]);
});

getCaloriesPerElf("input.txt").then((x) => {
  console.log(
    x
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((prev, curr) => prev + curr, 0)
  );
});

// getCaloriesPerElf("input.txt").then((x) => console.log(x.sort()[1]));
