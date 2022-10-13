const { NotImplementedError } = require("../extensions/index.js");

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
  const repeatStr = (str, times, sep) => {
    let res = str;
    for (let i = 1; i < times; i++) {
      res += sep + str;
    }
    return res;
  };
  const toStr = (str) => {
    if (str == null) {
      str = "null";
    }
    return "" + str;
  };

  str = toStr(str);
  let addition = "";
  if (options.hasOwnProperty("addition")) addition = toStr(options.addition);

  if (addition) {
    addition = repeatStr(
      addition,
      options.additionRepeatTimes,
      options.additionSeparator ? options.additionSeparator.toString() : "|"
    );
  }

  return repeatStr(
    str + addition,
    options.repeatTimes,
    options.separator ? options.separator.toString() : "+"
  );
}

module.exports = {
  repeater,
};
