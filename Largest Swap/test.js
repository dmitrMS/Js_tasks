import { functions } from './function.js';

test('largestSwap first test', () => {
  expect(functions.largestSwap(27)).toEqual(false);
});

test('largestSwap second test', () => {
  expect(functions.largestSwap(54)).toEqual(true);
});
