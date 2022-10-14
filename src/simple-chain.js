const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const marker = "~~";
const chainMaker = {
  chain: "",
  marker: "~~",
  getLength() {
    return this.chain ? this.chain.split(marker).length : 0;
  },
  addLink(value) {
    let str = "" + value;
    // if (isNaN(str) && typeof str != "string") str = "null";
    if (this.getLength() > 0) {
      this.chain += `${marker}( ${str} )`;
    } else {
      this.chain = `( ${str} )`;
    }
    return this;
  },
  removeLink(position) {
    if (this.getLength() > 0) {
      if (
        position > this.getLength() ||
        position <= 0 ||
        !position ||
        !Number(position)
      ) {
        this.chain = "";
        throw new Error("You can't remove incorrect link!");
      }
      const temp = this.chain.split(marker);
      temp.splice(position - 1, 1);
      this.chain = temp.join(marker);
    }
    return this;
  },
  reverseChain() {
    if (this.getLength() > 0)
      this.chain = this.chain.split(marker).reverse().join(marker);
    return this;
  },
  finishChain() {
    let temp = this.chain;
    this.chain = "";
    return temp;
  },
};

module.exports = {
  chainMaker,
};
