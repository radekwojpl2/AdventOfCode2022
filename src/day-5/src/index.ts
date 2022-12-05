import operateCrane90000 from "./day-5/day-5";

const cratesStack = [
  { index: 1, crate: ["D", "L", "V", "T", "M", "H", "F"] },
  { index: 2, crate: ["H", "Q", "G", "J", "C", "T", "N", "P"] },
  { index: 3, crate: ["R", "S", "D", "M", "P", "H"] },
  { index: 4, crate: ["L", "B", "V", "F"] },
  { index: 5, crate: ["N", "H", "G", "L", "Q"] },
  { index: 6, crate: ["W", "B", "D", "G", "R", "M", "P"] },
  { index: 7, crate: ["G", "M", "N", "R", "C", "H", "L", "Q"] },
  { index: 8, crate: ["C", "L", "W"] },
  { index: 9, crate: ["R", "D", "L", "Q", "J", "Z", "M", "T"] },
];

operateCrane90000("input.txt", cratesStack).then((x) => console.log(x));
