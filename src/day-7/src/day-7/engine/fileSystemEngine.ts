import {
  CreateDirCommand,
  CreateFileCommand,
  Dir,
  FileName,
  parseInput,
  Root,
} from "../models/root";

export const recoverFileSystem = async (fileName: FileName): Promise<Dir> => {
  const root = new Dir("/");
  let referenceDir = root;

  const stepsToRecover = await parseInput(fileName);

  // console.log(stepsToRecover);

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
