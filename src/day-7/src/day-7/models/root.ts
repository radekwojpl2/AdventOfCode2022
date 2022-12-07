import fs from "fs";
import readline from "readline";

type File = { name: string; size: number };

export class Dir {
  public _name: string;
  private files: File[] = [];
  public directories: Dir[] = [];
  private _parent: Dir | undefined = undefined;
  constructor(name: string) {
    this._name = name;
  }

  addParent(dir: Dir) {
    this._parent = dir;
  }

  getParentDir() {
    return this._parent;
  }

  getDirSize = () => {
    let dirSize = 0;
    const fileSize = this.files.reduce((acc, curr) => acc + curr.size, 0);
    if (this.directories.length > 0)
      this.directories.forEach((x) => {
        dirSize = dirSize + x.getDirSize();
      });

    return fileSize + dirSize;
  };

  getActualSize() {
    const fileSize = this.files.reduce((acc, curr) => acc + curr.size, 0);

    return fileSize;
  }

  addNewFile = (file: File) => {
    this.files.push(file);
  };

  addNewDirectory = (dir: Dir) => {
    this.directories.push(dir);
  };
}

export const CreateDirCommand = (row: string) => {
  const data = row.split(" ");

  return new Dir(data[1]);
};

export const CreateFileCommand = (row: string): File => {
  const data = row.split(" ");

  return { name: data[1], size: Number(data[0]) };
};

export type FileName = "input.txt" | "test-data.txt";

export const parseInput = async (fileName: FileName) => {
  const fileStream = fs.createReadStream(`src/data/${fileName}`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  const result: { action: string; payLoad: string }[] = [];

  for await (const line of rl) {
    switch (true) {
      case line.includes("$ cd"):
        result.push({ action: "moveToDirectory", payLoad: line });
        break;
      case line.includes("$ ls"):
        result.push({ action: "ls", payLoad: line });
        break;
      case line.includes("dir"):
        result.push({ action: "createDirCommand", payLoad: line });
        break;
      default:
        result.push({ action: "createFileCommand", payLoad: line });
        break;
    }
  }

  return Promise.resolve(result);
};
