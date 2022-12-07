import { recoverFileSystem } from "../day-7/engine/fileSystemEngine";
import { Dir } from "../day-7/models/root";

// test("test engine mechanic", () => {
//   return recoverFileSystem("test-data.txt").then((x) => {
//     x.directories.forEach((x) => printAllDirSizes(x));
//   });
// });

test("test engine mechanic", () => {
  return recoverFileSystem("input.txt").then((x) => {
    expect(getAllSmallerSizes(x).reduce((acc, curr) => acc + curr, 0)).toBe(
      1077191
    );
  });
});

const result: number[] = [];

const getAllSmallerSizes = (dir: Dir) => {
  if (dir.getDirSize() < 100000) {
    result.push(dir.getDirSize());
  }
  if (dir.directories.length > 0) {
    for (const x of dir.directories) {
      getAllSmallerSizes(x);
    }
  }
  return result;
};
