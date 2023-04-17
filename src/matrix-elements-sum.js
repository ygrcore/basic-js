const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let counter = 0;
  let a2 = [];
for (let i=0;i<matrix[0].length;i++) {
  let a = [];
  for (let j=0;j<matrix.length;j++) {
     a.push(matrix[j][i])
  }
  a2.push(a)
}

for (let k=0;k<a2.length;k++){
  for (let l=0;l<a2[0].length;l++) {
         counter += a2[k][l]
    if (a2[k][l] === 0) {
      break;
    }
  }
}

   return counter
}

module.exports = {
  getMatrixElementsSum
};
