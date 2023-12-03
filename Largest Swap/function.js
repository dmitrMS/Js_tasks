function largestSwap(num) {
  const numFirst = Math.floor(num / 10);
  const numSecond = num % 10;
  const swap = numSecond.toString() + numFirst.toString();

  if (swap <= num) return true;

  return false;
}

export const functions = {
  largestSwap
};
