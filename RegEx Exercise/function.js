function rexesp(REGEXP) {
  const regexpSample = /\b\d\d:\d\d\b/;
  const match = REGEXP.match(regexpSample);
  return match[0];
}

export const functions = {
  rexesp
};
