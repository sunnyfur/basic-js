const { NotImplementedError } = require("../extensions/index.js");

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
  return Math.max.apply(
    null,
    n
      .toString()
      .split("")
      .map((elem, index, arr) => {
        const nArr = [...arr];
        nArr.splice(index, 1);
        return Number(nArr.join(""));
      })
  );
}

module.exports = {
  deleteDigit,
};
