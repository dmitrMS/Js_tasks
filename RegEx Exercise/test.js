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
