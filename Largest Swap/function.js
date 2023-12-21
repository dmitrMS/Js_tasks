function largestSwap(num) {
  const numFirst = Math.floor(num / 10);
  const numSecond = num % 10;
  const swap = numSecond.toString() + numFirst.toString();

  return swap <= num;
}

export const functions = {
  largestSwap
};
