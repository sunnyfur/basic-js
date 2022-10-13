const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  if (!Array.isArray(arguments[0])) return 0;

  const getAllStr = (elem) => {
    if (typeof elem != "object") return elem;
    const arr = [];
    if (Array.isArray(elem)) {
      Object.values(elem).forEach((element) => {
        arr.push(getAllStr(element));
      });
    }

    return arr;
  };

  const teamArr = getAllStr(arguments[0]);

  return teamArr
    .filter((elem) => typeof elem == "string")
    .sort((a, b) => a.trim()[0].localeCompare(b.trim()[0]))
    .reduce((team, elem) => team + elem.trim()[0], "")
    .toUpperCase();
}

module.exports = {
  createDreamTeam,
};
