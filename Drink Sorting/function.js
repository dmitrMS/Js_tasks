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

function sortDrinkByPriceMechanic(drinks) {
  for (let i = 0; i < drinks.length; i++) {
    for (let j = 0; j < drinks.length - 1; j++) {
      if (drinks[j].price > drinks[j + 1].price) {
        let temp = drinks[j];
        drinks[j] = drinks[j + 1];
        drinks[j + 1] = temp;
      }
    }
  }
  return drinks;
}

export const functions = {
  sortDrinkByPrice,
  sortDrinkByPriceMechanic
};
