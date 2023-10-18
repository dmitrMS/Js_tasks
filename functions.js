function addUp(num) {
  var result = 0;
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
