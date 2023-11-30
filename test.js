import { functions } from './functions.js';

test('numberSquares first test', () => {
  expect(functions.numberSquares(3)).toBe(14);
});

test('numberSquares second test', () => {
  expect(functions.numberSquares(10)).toBe(385);
});

test('seriesResistance first test', () => {
  expect(functions.seriesResistance([1, 5, 6, 3])).toBe('15 ohms');
});

test('seriesResistance second test', () => {
  expect(functions.seriesResistance([0.2, 0.3, 0.4])).toBe('0.9 ohm');
});

test('toBinary first test', () => {
  expect(functions.toBinary(0xff)).toBe('11111111');
});

test('toBinary second test', () => {
  expect(functions.toBinary(0xaa)).toBe('10101010');
});

test('numberSplit first test', () => {
  expect(functions.numberSplit(4)).toStrictEqual([2, 2]);
});

test('numberSplit second test', () => {
  expect(functions.numberSplit(10)).toStrictEqual([5, 5]);
});

test('rexesp first test', () => {
  expect(functions.rexesp('Breakfast at 09:00 in the room 123:456.')).toEqual(
    '09:00'
  );
});

test('rexesp second test', () => {
  expect(
    functions.rexesp('Breakfast at 13:54 in the room 123:456.')
  ).toStrictEqual('13:54');
});

test('timeForMilkAndCookies first test', () => {
  expect(functions.timeForMilkAndCookies(new Date(2013, 11, 24))).toEqual(true);
});

test('timeForMilkAndCookies second test', () => {
  expect(functions.timeForMilkAndCookies(new Date(2013, 10, 24))).toEqual(
    false
  );
});

test('largestSwap first test', () => {
  expect(functions.largestSwap(27)).toEqual(false);
});

test('largestSwap second test', () => {
  expect(functions.largestSwap(54)).toEqual(true);
});
test('minMax first test', () => {
  expect(functions.minMax([1.346, 1.6532, 1.8734, 1.8723])).toStrictEqual([
    1.346, 1.8734
  ]);
});

test('minMax second test', () => {
  expect(functions.minMax([14, 35, 6, 1, 34, 54])).toStrictEqual([1, 54]);
});
test('sortDrinkByPrice first test', () => {
  expect(
    functions.sortDrinkByPrice([
      { name: 'lemonade', price: 90 },
      { name: 'lime', price: 432 },
      { name: 'peach', price: 23 }
    ])
  ).toStrictEqual([
    { name: 'peach', price: 23 },
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 }
  ]);
});

test('sortDrinkByPrice second test', () => {
  expect(
    functions.sortDrinkByPrice([
      { name: 'water', price: 120 },
      { name: 'lime', price: 80 },
      { name: 'peach', price: 90 }
    ])
  ).toStrictEqual([
    { name: 'lime', price: 80 },
    { name: 'peach', price: 90 },
    { name: 'water', price: 120 }
  ]);
});
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
test('addUp first test', () => {
  expect(functions.addUp(4)).toEqual(10);
});

test('addUp second test', () => {
  expect(functions.addUp(13)).toEqual(91);
});
