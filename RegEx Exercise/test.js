import { functions } from './function.js';

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

test('rexesp third test', () => {
  expect(functions.rexesp('Breakfast in the room 123:456. 09:00')).toEqual(
    '09:00'
  );
});

test('rexesp four test', () => {
  expect(
    functions.rexesp('13:54. Breakfast in the room 123:456.')
  ).toStrictEqual('13:54');
});

test('rexesp five test', () => {
  expect(functions.rexesp('14:06')).toStrictEqual('14:06');
});
