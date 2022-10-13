const { NotImplementedError } = require("../extensions/index.js");

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
  let num = 0;
  let uniq = [];
  const s1Arr = s1.split("");
  const s2Arr = s2.split("");
  s1Arr.forEach((elem) => {
    if (!uniq.includes(elem)) {
      num += Math.min(
        s1Arr.filter((a) => a == elem).length,
        s2Arr.filter((a) => a == elem).length
      );
      uniq.push(elem);
    }
  });
  return num;
}

module.exports = {
  getCommonCharacterCount,
};
