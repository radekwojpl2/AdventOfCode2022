import { recoverFileSystem } from "../day-7/engine/fileSystemEngine";
import { Dir } from "../day-7/models/root";

// test("test engine mechanic", () => {
//   return recoverFileSystem("test-data.txt").then((x) => {
//     x.directories.forEach((x) => printAllDirSizes(x));
//   });
// });

test("test engine mechanic part one", () => {
  return recoverFileSystem("input.txt").then((x) => {
    expect(getAllSmallerSizes(x).reduce((acc, curr) => acc + curr, 0)).toBe(
      1077191
    );
  });
});

test("test engine mechanic part two", () => {
  return recoverFileSystem("input.txt").then((x) => {
    const actualSize = actualDirSize(x).reduce((acc, curr) => acc + curr, 0);
    const all = getAllDirSizes(x).sort((x, y) => x - y);
    const unusedSpace = 70000000 - actualSize;
    let result = 0;

    for (const size of all) {
      if (unusedSpace + size > 30000000) {
        result = size;
        break;
      }
    }
    expect(result).toBe(5649896);
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

const all: number[] = [];

const getAllDirSizes = (dir: Dir) => {
  all.push(dir.getDirSize());
  if (dir.directories.length > 0) {
    for (const x of dir.directories) {
      getAllDirSizes(x);
    }
  }
  return all;
};

const actualSizePerDir: number[] = [];

const actualDirSize = (dir: Dir) => {
  actualSizePerDir.push(dir.getActualSize());

  if (dir.directories.length > 0) {
    for (const x of dir.directories) {
      actualDirSize(x);
    }
  }
  return actualSizePerDir;
};
