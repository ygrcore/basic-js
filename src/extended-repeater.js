const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition === null? 'null' : options.addition === false ? options.addition.toString() : options.addition || '';
  // let addition = options.addition || options.addition.toString() || '' || 'null';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
//   console.log(additionSeparator)
  let additionStr = ''
  if (addition !== '') {
    for (let i=0;i<additionRepeatTimes;i++) {
      additionStr += addition + additionSeparator
    }
  }
//   console.log(additionStr)
  if (additionSeparator != '') {
      additionStr = additionStr.slice(0,-additionSeparator.length)
  }

  let optionStr = str + additionStr
//     console.log(separator)
  let finalStr = ''
  for (let i=0;i<repeatTimes;i++) {
    finalStr += optionStr + separator
  }

  if (separator != '') {
      finalStr = finalStr.slice(0,-separator.length)
  }
  return finalStr
}

module.exports = {
  repeater
};
