function addUp(num) {
  return num == 0 ? num : num + addUp(num - 1);
}
export const functions = {
  addUp
};
