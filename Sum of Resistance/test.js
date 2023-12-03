import { functions } from './function.js';

test('seriesResistance first test', () => {
  expect(functions.seriesResistance([1, 5, 6, 3])).toBe('15 ohms');
});

test('seriesResistance second test', () => {
  expect(functions.seriesResistance([0.2, 0.3, 0.4])).toBe('0.9 ohm');
});
