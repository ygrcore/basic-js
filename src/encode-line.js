const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = []
  let s = ''
  for (let i=0;i<str.length;i++) {
    s += str[i];
    if (s[s.length - 1] !== str[i+1]) {
      arr.push(s)
      s = ''
    }
  }
  let newArr = arr.map(i => i.length <= 1 ? i[0] : i.length + i[0])

  return newArr.join('')
}

module.exports = {
  encodeLine
};
