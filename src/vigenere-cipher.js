const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alp = "abcdefghijklmnopqrstuvwxyz";

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt() {
    if (arguments.length != 2 || !arguments[0] || !arguments[1])
      throw new Error("Incorrect arguments!");
    const text = arguments[0].toLowerCase();
    const word = arguments[1].toLowerCase();
    let res = "";
    const wLeng = word.length;
    let currWordIndex = 0;
    for (let i = 0; i < text.length; i++) {
      if (currWordIndex == wLeng) {
        currWordIndex = 0;
      }
      this.alp.indexOf(text[i]) < 0 || text[i] === " "
        ? (res += text[i])
        : (res +=
            this.alp[
              (this.alp.indexOf(text[i]) +
                this.alp.indexOf(word[currWordIndex++])) %
                this.alp.length
            ]);
    }
    return this.direct
      ? res.toUpperCase()
      : res.split("").reverse().join("").toUpperCase();
  }
  decrypt() {
    if (arguments.length != 2 || !arguments[0] || !arguments[1])
      throw new Error("Incorrect arguments!");
    const text = arguments[0].toLowerCase();
    const word = arguments[1].toLowerCase();
    let res = "";
    const wLeng = word.length;
    let currWordIndex = 0;
    for (let i = 0; i < text.length; i++) {
      if (currWordIndex == wLeng) {
        currWordIndex = 0;
      }
      if (this.alp.indexOf(text[i]) < 0 || text[i] === " ") res += text[i];
      else {
        res +=
          this.alp[
            (this.alp.indexOf(text[i]) -
              this.alp.indexOf(word[currWordIndex]) >=
            0
              ? this.alp.indexOf(text[i]) -
                this.alp.indexOf(word[currWordIndex++])
              : this.alp.indexOf(text[i]) -
                this.alp.indexOf(word[currWordIndex++]) +
                this.alp.length) % this.alp.length
          ];
      }
    }
    return this.direct
      ? res.toUpperCase()
      : res.split("").reverse().join("").toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
