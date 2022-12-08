import getAllVisibleTrees, {
  isTreeVisibleBottom,
  isTreeVisibleLeft,
  isTreeVisibleRight,
  isTreeVisibleTop,
} from "../day-8/part-1";

test("check part one", async () => {
  const visibleTrees = await getAllVisibleTrees("test-data.txt");

  expect(visibleTrees).toBe(21);
});

test("check part two", async () => {
  const visibleTrees = await getAllVisibleTrees("input.txt");

  expect(visibleTrees).toBe(1823);
});

test("checkRightVisibility", async () => {
  expect(isTreeVisibleRight(sut, 2, 1)).toBe(true);
});

test("checkRightVisibility", async () => {
  expect(isTreeVisibleRight(sut, 2, 2)).toBe(false);
});

test("checkRightVisibility", async () => {
  expect(isTreeVisibleRight(sut, 2, 3)).toBe(true);
});

test("checkRightVisibility", async () => {
  expect(isTreeVisibleRight(sut, 1, 3)).toBe(false);
});

////////

test("isTreeVisibleLeft", async () => {
  expect(isTreeVisibleLeft(sut, 1, 1)).toBe(true);
});

test("isTreeVisibleLeft", async () => {
  expect(isTreeVisibleLeft(sut, 1, 2)).toBe(false);
});

test("isTreeVisibleLeft", async () => {
  expect(isTreeVisibleLeft(sut, 1, 3)).toBe(false);
});

test("isTreeVisibleLeft left", async () => {
  expect(isTreeVisibleLeft(sut, 3, 3)).toBe(false);
});

///

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleTop(sut, 1, 1)).toBe(true);
});

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleTop(sut, 1, 2)).toBe(true);
});

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleTop(sut, 1, 3)).toBe(false);
});

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleTop(sut, 2, 1)).toBe(false);
});

//

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleBottom(sut, 1, 1)).toBe(false);
});

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleBottom(sut, 3, 2)).toBe(true);
});

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleBottom(sut, 2, 2)).toBe(false);
});

test("isTreeVisibleTop", async () => {
  expect(isTreeVisibleBottom(sut, 3, 3)).toBe(false);
});

var sut = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

beforeEach(() => {
  sut = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0],
  ];
});
