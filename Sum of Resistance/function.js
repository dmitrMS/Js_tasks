function seriesResistance(arr) {
  let result = 0;

  for (var i = 0; i < arr.length; i++) result = result + arr[i];

  if (result > 1.0) return result + ' ohms';

  return result + ' ohm';
}

export const functions = {
  seriesResistance
};
