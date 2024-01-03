import { functions } from './function.js';

test('addUp first test', () => {
  expect(functions.addUp(4)).toEqual(10);
});

test('addUp second test', () => {
  expect(functions.addUp(13)).toEqual(91);
});

test('addUpOptimized first test', () => {
  expect(functions.addUpOptimized(4)).toEqual(10);
});

test('addUpOptimized second test', () => {
  expect(functions.addUpOptimized(13)).toEqual(91);
});
