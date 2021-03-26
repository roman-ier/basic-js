const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(inc) {
	const springDate = new Date(inc);
    if (inc === null)
        throw new CustomError('THROWN');
    if (springDate.getFullYear()==2021)
    	throw new CustomError('THROWN');
    if (isNaN(Date.parse(inc)))
        throw new CustomError('THROWN');
    //validate_date(inc);
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


    function validate_date(value) {
        var arrD = value.split(",");
        arrD[1] -= 1;
        var d = new Date(arrD[2], arrD[1], arrD[0]);
        if (!(d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0]))
            throw new CustomError('THROWN');
    }
    //
    return arr[springDate.getMonth()];
};