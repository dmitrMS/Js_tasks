function numberSplit(n) {
  let arr = [];

  if (n % 2 !== 0) {
    arr[1] = Math.ceil(n / 2);
    arr[0] = Math.floor(n / 2);
  } else {
    arr[0] = n / 2;
    arr[1] = n / 2;
  }

  return arr;
}

export const functions = {
  numberSplit
};
