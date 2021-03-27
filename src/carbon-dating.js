const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = dateSample = (sample) =>

    (typeof sample !== 'string' || sample < 1 || sample > 15 || Number(sample) !== Number(sample)) ?
    false : Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD));
//return Math.round(0.693/sample) ;
//throw new CustomError('Not implemented');
// remove line with error and write your code here
;