function numberSquares(n) {
  if (n == 0) {
    return 0;
  }

  return n * n + numberSquares(n - 1);
}

export const functions = {
  numberSquares
};
