import * as fs from "fs";

async function getCaloriesPerElf(fileName) {
  const fileStream = fs.readFileSync(fileName, { encoding: "utf8" });

  var elfs = fileStream.split("\r\n");

  let caloriesPerElf = elfs.toString().split(",,");

  console.log(caloriesPerElf);

  let result = caloriesPerElf.map((x) =>
    x.split(",").reduce((acc, curr) => acc + Number(curr), 0)
  );

  return result;
}

export default getCaloriesPerElf;
