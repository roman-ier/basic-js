import { NotImplementedError } from "../extensions/index.js";

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
export default class VigenereCipheringMachine {
  constructor(prop = true) {
    this.direction = prop;
  }
  encrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    if (!str || !key) throw new Error();
    key = key
      .toUpperCase()
      .repeat(Math.ceil(str.length / key.length))
      .slice(0, str.length);
    str = str
      .toUpperCase()
      .split("")
      .reduce(
        (pv, item) => {
          let itemCode = item.charCodeAt();
          if (itemCode > 64 && itemCode < 91) {
            let newItemCode = itemCode - 65 + key[pv[1]].charCodeAt();
            return [
              [
                ...pv[0],
                String.fromCharCode(
                  newItemCode > 90 ? newItemCode - 26 : newItemCode
                ),
              ],
              pv[1] + 1,
            ];
          } else return [[...pv[0], item], pv[1]];
        },
        [[], 0]
      )[0];
    if (this.direction) return str.join("");
    else return str.reverse().join("");
  }
  decrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    if (!str || !key) throw new Error();
    key = key
      .toUpperCase()
      .repeat(Math.ceil(str.length / key.length))
      .slice(0, str.length);
    str = str.split("").reduce(
      (pv, item) => {
        let itemCode = item.charCodeAt();
        if (itemCode > 64 && itemCode < 91) {
          let newItemCode = itemCode + 65 - key[pv[1]].charCodeAt();
          return [
            [
              ...pv[0],
              String.fromCharCode(
                newItemCode < 65 ? newItemCode + 26 : newItemCode
              ),
            ],
            pv[1] + 1,
          ];
        } else return [[...pv[0], item], pv[1]];
      },
      [[], 0]
    )[0];
    if (this.direction) return str.join("");
    else return str.reverse().join("");
  }
}
