const { NotImplementedError } = require("../extensions/index.js");

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
  let newStr = "";
  if (!str) return newStr;
  let double = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      double++;
    } else {
      newStr += (double > 0 ? double + 1 : "") + str[i - 1];
      double = 0;
    }
  }
  newStr += (double > 0 ? double + 1 : "") + str[str.length - 1];

  return newStr;
}

module.exports = {
  encodeLine,
};
