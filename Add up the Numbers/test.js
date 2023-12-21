import { functions } from './function.js';

test('addUp first test', () => {
  expect(functions.addUp(4)).toEqual(10);
});

test('addUp second test', () => {
  expect(functions.addUp(13)).toEqual(91);
});
