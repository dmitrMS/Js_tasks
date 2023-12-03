function sortDrinkByPrice(drinks) {
  drinks.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }

    if (a.price < b.price) {
      return -1;
    }

    return 0;
  });

  return drinks;
}

export const functions = {
  sortDrinkByPrice
};
