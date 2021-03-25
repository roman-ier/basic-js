const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(inc) {
    if (inc === null)
        throw new CustomError('THROWN');
    if (isNaN(Date.parse(inc)))
        throw new CustomError('THROWN');
    const springDate = new Date(inc);
    const arr = [
        'winter',
        'winter',
        'spring',
        'spring',
        'spring',
        'summer',
        'summer',
        'summer',
        'fall',
        'fall',
        'fall',
        'winter',
    ];
    //
    return arr[springDate.getMonth()];
};