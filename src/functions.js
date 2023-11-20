function addUp(num) {
  let result = 0;

  for (let i = 0; i <= num; i++) {
    result = result + i;
  }

  return result;
}

function numberSquares(n) {
  if (n == 0) {
    return 0;
  }

  return n * n + numberSquares(n - 1);
}

function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

function toBinary(num) {
  return num.toString(2);
}

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

function minMax(arr) {
  const sizeArr = arr.lenght;
  let minMaxArr = [,];
  let result = 0;

  for (var i = 0; i < arr.length; i++) if (arr[i] != undefined) result++;

  result--;

  arr.sort(function (a, b) {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });

  minMaxArr[0] = arr[0];
  minMaxArr[1] = arr[result];

  return minMaxArr;
}

function seriesResistance(arr) {
  let result = 0;

  for (var i = 0; i < arr.length; i++) result = result + arr[i];

  if (result > 1.0) return result + " ohms";

  return result + " ohm";
}

function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() == 24;
}

function numberSplit(n) {
  let arr = [,];

  if (n % 2 !== 0) {
    arr[1] = Math.ceil(n / 2);
    arr[0] = Math.floor(n / 2);
  } else {
    arr[0] = n / 2;
    arr[1] = n / 2;
  }

  return arr;
}

function largestSwap(num) {
  const numFirst = Math.floor(num / 10);
  const numSecond = num % 10;
  const swap = numSecond.toString() + numFirst.toString();

  if (swap <= num) return true;

  return false;
}

function rexesp(REGEXP) {
  const regexpWithoutE = /\b\d\d:\d\d\b/;
  const match1 = REGEXP.match(regexpWithoutE);
  return match1;
}
export const functions = {
  numberSquares,
  seriesResistance,
  toBinary,
  numberSplit,
  rexesp,
  timeForMilkAndCookies,
  largestSwap,
  minMax,
  sortDrinkByPrice,
  bitwiseAND,
  bitwiseOR,
  bitwiseXOR,
};
