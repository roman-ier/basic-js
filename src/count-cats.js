const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    return arr.reduce((previousValue, item) => previousValue + item.reduce((pv, i) => (i === '^^')? pv + 1:pv, 0), 0)
};