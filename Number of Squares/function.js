function numberSquares(n) {
  if (n == 0) {
    return 0;
  }

  return n * n + numberSquares(n - 1);
}

function numberSquaresOptimized(n) {
  return (n * n * n) / 3 + (n * n) / 2 + n / 6;
}

export const functions = {
  numberSquares,
  numberSquaresOptimized
};
