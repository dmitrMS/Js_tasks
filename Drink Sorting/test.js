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

test('sortDrinkByPrice third test', () => {
  expect(
    functions.sortDrinkByPrice([
      { name: 'water', price: 120 },
      { name: 'lime', price: 120 },
      { name: 'peach', price: 120 }
    ])
  ).toStrictEqual([
    { name: 'water', price: 120 },
    { name: 'lime', price: 120 },
    { name: 'peach', price: 120 }
  ]);
});
test('sortDrinkByPrice four test', () => {
  expect(functions.sortDrinkByPrice([])).toStrictEqual([]);
});

test('sortDrinkByPriceMechanic first test', () => {
  expect(
    functions.sortDrinkByPriceMechanic([
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

test('sortDrinkByPriceMechanic second test', () => {
  expect(
    functions.sortDrinkByPriceMechanic([
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

test('sortDrinkByPriceMechanic third test', () => {
  expect(
    functions.sortDrinkByPriceMechanic([
      { name: 'water', price: 120 },
      { name: 'lime', price: 120 },
      { name: 'peach', price: 120 }
    ])
  ).toStrictEqual([
    { name: 'water', price: 120 },
    { name: 'lime', price: 120 },
    { name: 'peach', price: 120 }
  ]);
});
test('sortDrinkByPriceMechanic four test', () => {
  expect(functions.sortDrinkByPriceMechanic([])).toStrictEqual([]);
});
