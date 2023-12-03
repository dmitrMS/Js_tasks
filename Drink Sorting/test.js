import { functions } from './function.js';

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
