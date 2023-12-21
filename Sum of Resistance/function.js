function seriesResistance(arr) {
  let result = 0;

  arr.forEach((element) => (result = result + element));

  return result > 1.0 ? result + ' ohms' : result + ' ohm';
}

export const functions = {
  seriesResistance
};
