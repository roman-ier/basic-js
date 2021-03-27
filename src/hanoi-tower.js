const CustomError = require("../extensions/custom-error");

module.exports = calculateHanoi = (dn, ts) => {
    return {
        turns: (2 ** dn - 1),
        seconds: Math.floor(3600 * (2 ** dn - 1) / ts),
    };
};