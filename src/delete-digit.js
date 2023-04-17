const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let nToString = n.toString();
  if (nToString.length === 3) {
    let array = []

    for (let i=0;i<nToString.length-1;i++) {
      for (let k=i+1;k<nToString.length;k++) {
        str = nToString[i] + nToString[k]
        array.push(+str)
      }
    }
    return Math.max(...array)
  }
  let arr = n.toString().split('')

  let nums = arr.map(i => i = +i)
  let weak = Math.min(...nums);
  nums.splice(nums.indexOf(weak), 1)
  let res = +nums.join('')
  return res;
}

module.exports = {
  deleteDigit
};
