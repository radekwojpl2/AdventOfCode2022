import {
  CreateDirCommand,
  CreateFileCommand,
  Dir,
  FileName,
  parseInput,
} from "../models/root";

export const recoverFileSystem = async (fileName: FileName): Promise<Dir> => {
  const root = new Dir("/");
  let referenceDir = root;

  const stepsToRecover = await parseInput(fileName);

  for (const step of stepsToRecover) {
    switch (step.action) {
      case "ls":
        break;
      case "createDirCommand":
        {
          let newDir = CreateDirCommand(step.payLoad);
          newDir.addParent(referenceDir);
          referenceDir.addNewDirectory(newDir);
        }
        break;
      case "createFileCommand":
        referenceDir.addNewFile(CreateFileCommand(step.payLoad));
        break;
      case "moveToDirectory":
        if (step.payLoad.includes("$ cd ..")) {
          referenceDir = referenceDir.getParentDir()!;
        } else {
          referenceDir = referenceDir.directories.find(
            (x) => x._name === step.payLoad.split(" ")[2]
          )!;
        }
        break;
      default:
        throw new Error("can not be here");
    }
  }

  return Promise.resolve(root);
};

export const getPartOneResult = async (fileName: FileName) => {
  const fileSystem = await recoverFileSystem(fileName);
  const fileSize = getAllDirectorySizes(fileSystem).filter(
    (size) => size < 100000
  );

  return fileSize.reduce((acc, curr) => acc + curr, 0);
};

const result: number[] = [];

const getAllDirectorySizes = (dir: Dir) => {
  result.push(dir.getDirSize());
  if (dir.directories.length > 0) {
    for (const x of dir.directories) {
      getAllDirectorySizes(x);
    }
  }
  return result;
};
