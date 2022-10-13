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
  static alp = "abcdefghijklmnopqrstuvwxyz";
  encrypt() {
    if (arguments.length != 2 || !arguments[0] || !arguments[1])
      throw new Error("Incorrect arguments!");
    const text = arguments[0];
    const word = arguments[1];
    let res = "";
    const wLeng = word.length;
    let currWordIndex = 0;
    for (let i = 0; i < text.length; i++) {
      if (currWordIndex < wLeng) {
        currWordIndex++;
      }
      currWordIndex = 0;
    }
    return res;
  }
  decrypt() {
    if (arguments.length != 2 || !arguments[0] || !arguments[1])
      throw new Error("Incorrect arguments!");
    const text = arguments[0];
    const word = arguments[1];
  }
}

module.exports = {
  VigenereCipheringMachine,
};
