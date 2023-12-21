import { functions } from './function.js';

//111 & 1100 = 100
test('bitwiseAnd first test', () => {
  expect(functions.bitwiseAnd(7, 12)).toEqual(4);
});

//100000 & 10001 = 0
test('bitwiseAnd second test', () => {
  expect(functions.bitwiseAnd(32, 17)).toEqual(0);
});

test('bitwiseAndMechanic first test', () => {
  expect(functions.bitwiseAndMechanic(7, 12)).toEqual(4);
});

//100000 & 10001 = 0
test('bitwiseAndMechanic second test', () => {
  expect(functions.bitwiseAndMechanic(32, 17)).toEqual(0);
});

//111 & 1100 = 1111
test('bitwiseOr first test', () => {
  expect(functions.bitwiseOr(7, 12)).toEqual(15);
});

//100000 & 10001 = 110001
test('bitwiseOr second test', () => {
  expect(functions.bitwiseOr(32, 17)).toEqual(49);
});

//111 & 1100 = 1111
test('bitwiseOrMechanic first test', () => {
  expect(functions.bitwiseOrMechanic(7, 12)).toEqual(15);
});

//100000 & 10001 = 110001
test('bitwiseOrMechanic second test', () => {
  expect(functions.bitwiseOrMechanic(32, 17)).toEqual(49);
});

//111 & 1100 = 1011
test('bitwiseXor first test', () => {
  expect(functions.bitwiseXor(7, 12)).toEqual(11);
});

//100000 & 10001 = 110001
test('bitwiseXor second test', () => {
  expect(functions.bitwiseXor(32, 17)).toEqual(49);
});

//111 & 1100 = 1011
test('bitwiseXorMechanic first test', () => {
  expect(functions.bitwiseXorMechanic(7, 12)).toEqual(11);
});

//100000 & 10001 = 110001
test('bitwiseXorMechanic second test', () => {
  expect(functions.bitwiseXorMechanic(32, 17)).toEqual(49);
});
