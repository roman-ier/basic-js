const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    encrypt = (str = false, key = false) => {
        if (!str || !key)
            throw new Error();
        return str;
    }
    decrypt = (str = false, key = false) => {
        if (!str || !key)
            throw new Error();
        return str;
        // remove line with error and write your code here
    }
}

module.exports = VigenereCipheringMachine;