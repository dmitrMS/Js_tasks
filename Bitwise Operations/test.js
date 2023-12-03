import { functions } from './function.js';

test('bitwiseAND first test', () => {
  expect(functions.bitwiseAND(7, 12)).toEqual(4);
});

test('bitwiseAND second test', () => {
  expect(functions.bitwiseAND(32, 17)).toEqual(0);
});

test('bitwiseOR first test', () => {
  expect(functions.bitwiseOR(7, 12)).toEqual(15);
});

test('bitwiseOR second test', () => {
  expect(functions.bitwiseOR(32, 17)).toEqual(49);
});

test('bitwiseXOR first test', () => {
  expect(functions.bitwiseXOR(7, 12)).toEqual(11);
});

test('bitwiseXOR second test', () => {
  expect(functions.bitwiseXOR(32, 17)).toEqual(49);
});
