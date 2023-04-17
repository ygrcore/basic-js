const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  for (let i=0;i<domains.length;i++) {
    let str = '';
    let a = domains[i].split('.').map(i => '.' + i).reverse()
    for (let i=0;i<a.length;i++) {
      str = str + a[i];
      arr.push(str)
    }
  }
  let result = arr.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  return result
}

module.exports = {
  getDNSStats
};
