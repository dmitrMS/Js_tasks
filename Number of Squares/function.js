function numberSquares(n) {
  // 3-18 10-24
  if (n == 0) {
    return 0;
  }

  return n * n + numberSquares(n - 1);
}

function numberSquaresOptimized(n) {
  //3-12 10-13
  return (n * n * n) / 3 + (n * n) / 2 + n / 6;
}

export const functions = {
  numberSquares,
  numberSquaresOptimized
};
