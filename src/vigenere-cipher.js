const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(prop = true) {
    this.direction = prop;
  }
  encrypt(str = false, key = false) {
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
  decrypt(str = false, key = false) {
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

module.exports = VigenereCipheringMachine;
