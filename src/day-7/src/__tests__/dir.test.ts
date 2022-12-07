import { Dir } from "../day-7/models/root";

test("get dir i size to be 584", () => {
  //arrange
  const dir = new Dir("e");
  dir.addNewFile({ name: "i", size: 584 });

  //act
  const size = dir.getDirSize();
  //assert
  expect(size).toBe(584);
});

test("get dir i size to be 584", () => {
  //arrange
  const dir = new Dir("e");
  dir.addNewFile({ name: "i", size: 584 });

  //act
  const size = dir.getDirSize();
  //assert
  expect(size).toBe(584);
});

test("get dir a size to be 94853", () => {
  //arrange
  const dir = new Dir("a");
  const dirI = new Dir("i");
  dirI.addNewFile({ name: "i", size: 584 });
  dir.addNewDirectory(dirI);

  dir.addNewFile({ name: "f", size: 29116 });
  dir.addNewFile({ name: "h", size: 2557 });
  dir.addNewFile({ name: "g", size: 62596 });

  //act
  const size = dir.getDirSize();
  //assert
  expect(size).toBe(94853);
});

test("get dir a size to be 94853", () => {
  //arrange
  const dir = new Dir("a");
  const dirI = new Dir("i");
  dirI.addNewFile({ name: "i", size: 584 });
  const dirB = new Dir("i");
  dirB.addNewFile({ name: "b", size: 584 });
  dirI.addNewDirectory(dirB);
  dir.addNewDirectory(dirI);

  dir.addNewFile({ name: "f", size: 29116 });
  dir.addNewFile({ name: "h", size: 2557 });
  dir.addNewFile({ name: "g", size: 62596 });

  //act
  const size = dir.getDirSize();
  //assert
  expect(size).toBe(95437);
});
