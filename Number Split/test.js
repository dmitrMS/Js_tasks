import { functions } from './function.js';

test('numberSplit first test', () => {
  expect(functions.numberSplit(4)).toStrictEqual([2, 2]);
});

test('numberSplit second test', () => {
  expect(functions.numberSplit(10)).toStrictEqual([5, 5]);
});
