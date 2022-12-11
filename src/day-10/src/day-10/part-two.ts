import { FileName, getCycleXValue, readFile } from "./part-one";

export const getCrtLine = async (
  file: FileName,
  start: number,
  end: number
) => {
  const instructions = await readFile(file);

  console.log(instructions);

  let crtLine = "";
  let x = 1;
  let spritePosition = x;
  let cycle = 0;

  console.log("current sprite", x - 1, x, x + 1);

  for (let i = start; i <= end; i++) {
    const instruction = instructions[i];
    if (instruction.type === "addx" && instruction.toAdd === 0)
      console.log(
        "cycle",
        cycle + 1,
        "begin executing:",
        instruction.type,
        instruction.toAdd
      );
    console.log("cycle", cycle, "crt draw pixel in", cycle);

    if (instructions[i].type === "addx" && instructions[i].toAdd === 0) {
      if (
        spritePosition === cycle ||
        spritePosition - 1 === cycle ||
        spritePosition + 1 === cycle
      ) {
        crtLine += "#";
      } else {
        crtLine += ".";
      }
      console.log("current crt line", crtLine);
    } else if (instructions[i].type === "addx") {
      if (
        spritePosition === cycle ||
        spritePosition - 1 === cycle ||
        spritePosition + 1 === cycle
      ) {
        crtLine += "#";
      } else {
        crtLine += ".";
      }
      x = getCycleXValue(i + 1, instructions);
      spritePosition = x;
      console.log("finish executing", instruction.type, instruction.toAdd);
      console.log(spritePosition - 1, spritePosition, spritePosition + 1);
      console.log("current crt line", crtLine);
    } else if (instructions[i].type === "noop") {
      if (
        spritePosition === cycle ||
        spritePosition - 1 === cycle ||
        spritePosition + 1 === cycle
      ) {
        crtLine += "#";
      } else {
        crtLine += ".";
      }
    }
    cycle = cycle + 1;
  }

  return crtLine;
};
