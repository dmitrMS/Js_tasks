function rexesp(REGEXP) {
  const regexpWithoutE = /\b\d\d:\d\d\b/;
  const match1 = REGEXP.match(regexpWithoutE);
  return match1[0];
}

export const functions = {
  rexesp
};
