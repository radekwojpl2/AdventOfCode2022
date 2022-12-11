import { sign } from "crypto";
import getSignals, {
  getSignalSum,
  Instruction,
  takeUntilCycleNumber,
} from "../day-10/part-one";

test("check get signal sum for test data", async () => {
  const test = await getSignals("test-data.txt");

  expect(getSignalSum(test)).toBe(13140);
});

test("check get signal sum for production data", async () => {
  const test = await getSignals("input.txt");

  expect(getSignalSum(test)).toBe(15360);
});

test("check 20", async () => {
  const test = await getSignals("test-data.txt");

  const signal = takeUntilCycleNumber(19, test);

  expect(signal).toBe(21);

  const signalStrength = 20 * signal;

  expect(signalStrength).toBe(420);
});

test("check 60", async () => {
  const test = await getSignals("test-data.txt");

  const signal = takeUntilCycleNumber(59, test);

  expect(signal).toBe(19);

  const signalStrength = 60 * signal;

  expect(signalStrength).toBe(1140);
});

test("check 100", async () => {
  const test = await getSignals("test-data.txt");

  const signal = takeUntilCycleNumber(99, test);

  expect(signal).toBe(18);

  const signalStrength = 100 * signal;

  expect(signalStrength).toBe(1800);
});

test("check 140", async () => {
  const test = await getSignals("test-data.txt");

  const signal = takeUntilCycleNumber(139, test);

  expect(signal).toBe(21);

  const signalStrength = 140 * signal;

  expect(signalStrength).toBe(2940);
});

test("check 180", async () => {
  const test = await getSignals("test-data.txt");

  const signal = takeUntilCycleNumber(179, test);

  expect(signal).toBe(16);

  const signalStrength = 180 * signal;

  expect(signalStrength).toBe(2880);
});

test("check 220", async () => {
  const test = await getSignals("test-data.txt");

  console.log(test.length, "elko");

  const signal = takeUntilCycleNumber(219, test);

  expect(signal).toBe(18);

  const signalStrength = 220 * signal;

  expect(signalStrength).toBe(3960);
});

test("take until 20 instruction and get signal", () => {
  const signal = takeUntilCycleNumber(20, instructions);

  expect(signal).toBe(21);
});

test("take until 20 instruction and get signal", () => {
  const signal = takeUntilCycleNumber(60, instructions);

  expect(signal).toBe(19);
});

const instructions: Instruction[] = [
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 15, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -11, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 6, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -3, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 5, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -8, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 13, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 4, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 5, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 5, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 5, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 5, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -35, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 24, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -19, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 16, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -11, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 21, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -15, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -3, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 9, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -3, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 8, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 5, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: -36, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 1, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 7, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "noop", toAdd: 0, cycles: 1 },
  { type: "addx", toAdd: 0, cycles: 1 },
];
