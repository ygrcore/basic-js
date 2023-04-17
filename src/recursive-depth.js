const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    if (Array.isArray(arr)) {
      for (let val in arr) {
        if (Array.isArray(arr[val]))
        counter = Math.max(counter, this.calculateDepth(arr[val]))
      }
      counter++
    }
    return counter;
  }
}

module.exports = {
  DepthCalculator
};
