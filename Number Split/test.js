import { functions } from './function.js';

test('numberSplit first test', () => {
  expect(functions.numberSplit(4)).toStrictEqual([2, 2]);
});

test('numberSplit second test', () => {
  expect(functions.numberSplit(10)).toStrictEqual([5, 5]);
});

test('numberSplit third test', () => {
  expect(functions.numberSplit(-12)).toStrictEqual([-6, -6]);
});

test('numberSplit four test', () => {
  expect(functions.numberSplit(0)).toStrictEqual([0, 0]);
});
