const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return 1 + arr.reduce((previousValue, item, index, array) => {
            let c = 0;
            if (Array.isArray(item)) {
                c = this.calculateDepth(item);
            }
            if (previousValue > c)
                return previousValue;
            else return c;
        }, 0)
    }
};