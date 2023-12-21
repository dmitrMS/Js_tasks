function bitwiseAnd(n1, n2) {
  return n1 & n2;
}

function bitwiseAndMechanic(n1, n2) {
  const bit1 = n1.toString(2);
  const bit2 = n2.toString(2);
  var resultbit = '';
  var result = 0;

  if (bit1.length <= bit2.length) {
    for (let i = bit1.length - 1, j = bit2.length - 1; i >= 0; i--, j--) {
      if (bit1[i] !== bit2[j] || (bit1[i] === bit2[j] && bit1[i] === '0')) {
        resultbit += '0';
      } else if (bit1[i] === bit2[j] && bit1[i] === '1') {
        resultbit += '1';
      }
    }
  } else {
    for (let i = bit1.length - 1, j = bit2.length - 1; j >= 0; i--, j--) {
      if (bit1[i] !== bit2[j] || (bit1[i] === bit2[j] && bit1[i] === '0')) {
        resultbit += '0';
      } else if (bit1[i] === bit2[j] && bit1[i] === '1') {
        resultbit += '1';
      }
    }
  }

  for (var k = 0; k < resultbit.length; k++) {
    if (resultbit[k] === '1') {
      result += Math.pow(2, k);
    }
  }

  return result;
}

function bitwiseOr(n1, n2) {
  return n1 | n2;
}

function bitwiseOrMechanic(n1, n2) {
  const bit1 = n1.toString(2);
  const bit2 = n2.toString(2);
  var resultbit = '';
  var result = 0;

  if (bit1.length >= bit2.length) {
    for (let i = bit1.length - 1, j = bit2.length - 1; i >= 0; i--, j--) {
      if (bit1[i] === bit2[j] && bit1[i] === '0') {
        resultbit += '0';
      } else if (bit2[j] === '1' || bit1[i] === '1') {
        resultbit += '1';
      } else if (bit2[j] === undefined) {
        resultbit += bit1[i];
      }
    }
  } else {
    for (let i = bit1.length - 1, j = bit2.length - 1; j >= 0; i--, j--) {
      if (bit1[i] === bit2[j] && bit1[i] === '0') {
        resultbit += '0';
      } else if (bit2[j] === '1' || bit1[i] === '1') {
        resultbit += '1';
      } else if (bit1[i] === undefined) {
        resultbit += bit2[j];
      }
    }
  }

  for (var k = 0; k < resultbit.length; k++) {
    if (resultbit[k] === '1') {
      result += Math.pow(2, k);
    }
  }

  return result;
}

function bitwiseXor(n1, n2) {
  return n1 ^ n2;
}

function bitwiseXorMechanic(n1, n2) {
  const bit1 = n1.toString(2);
  const bit2 = n2.toString(2);
  var resultbit = '';
  var result = 0;

  if (bit1.length >= bit2.length) {
    for (let i = bit1.length - 1, j = bit2.length - 1; i >= 0; i--, j--) {
      if (bit1[i] === bit2[j] && bit1[i] === '0') {
        resultbit += '0';
      } else if (bit1[i] === bit2[j] && bit1[i] === '1') {
        resultbit += '0';
      } else if (bit2[j] === '1' || bit1[i] === '1') {
        resultbit += '1';
      } else if (bit2[j] === undefined) {
        resultbit += bit1[i];
      }
    }
  } else {
    for (let i = bit1.length - 1, j = bit2.length - 1; j >= 0; i--, j--) {
      if (bit1[i] === bit2[j] && bit1[i] === '0') {
        resultbit += '0';
      } else if (bit1[i] === bit2[j] && bit1[i] === '1') {
        resultbit += '0';
      } else if (bit2[j] === '1' || bit1[i] === '1') {
        resultbit += '1';
      } else if (bit1[i] === undefined) {
        resultbit += bit2[j];
      }
    }
  }

  for (var k = 0; k < resultbit.length; k++) {
    if (resultbit[k] === '1') {
      result += Math.pow(2, k);
    }
  }

  return result;
}

export const functions = {
  bitwiseAnd,
  bitwiseOr,
  bitwiseXor,
  bitwiseAndMechanic,
  bitwiseOrMechanic,
  bitwiseXorMechanic
};
