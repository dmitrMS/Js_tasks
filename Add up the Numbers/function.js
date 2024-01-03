function addUp(num) {
  return num == 0 ? num : num + addUp(num - 1);
}

function addUpOptimized(num) {
  return (num / 2 + 0.5) * num;
}

export const functions = {
  addUp,
  addUpOptimized
};
