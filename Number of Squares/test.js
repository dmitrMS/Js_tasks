import { functions } from './function.js';

test('numberSquares first test', () => {
  expect(functions.numberSquares(3)).toBe(14);
});

test('numberSquares second test', () => {
  expect(functions.numberSquares(10)).toBe(385);
});

test('numberSquaresOptimized first test', () => {
  expect(functions.numberSquaresOptimized(3)).toBe(14);
});

test('numberSquaresOptimized second test', () => {
  expect(functions.numberSquaresOptimized(10)).toBe(385);
});
