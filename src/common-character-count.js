const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let counter = 0;
  let s2arr = s2.split('');
  for (let v of s1) {
    if (s2arr.includes(v)) {
      let start = s2arr.indexOf(v);
      s2arr.splice(start, 1)
      counter++;
    }
    continue;
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
