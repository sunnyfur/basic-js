const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // const positions=[];
  // arr.forEach((elem,index)=>{if (elem==-1) positions.push(index) } );
  const sorted = arr.filter((elem) => elem != -1).sort((a, b) => a - b);

  let j = 0;
  arr.forEach((elem, index) => {
    if (elem !== -1) arr[index] = sorted[j++];
  });
  return arr;
}

module.exports = {
  sortByHeight,
};
