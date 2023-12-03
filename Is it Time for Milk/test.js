import { functions } from './function.js';

test('timeForMilkAndCookies first test', () => {
  expect(functions.timeForMilkAndCookies(new Date(2013, 11, 24))).toEqual(true);
});

test('timeForMilkAndCookies second test', () => {
  expect(functions.timeForMilkAndCookies(new Date(2013, 10, 24))).toEqual(
    false
  );
});
