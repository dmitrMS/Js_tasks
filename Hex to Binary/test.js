import { functions } from './function.js';

test('toBinary first test', () => {
  expect(functions.toBinary(0xff)).toBe('11111111');
});

test('toBinary second test', () => {
  expect(functions.toBinary(0xaa)).toBe('10101010');
});
