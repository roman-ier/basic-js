const CustomError = require("../extensions/custom-error");

module.exports = repeater = (string, options) => {
    const type = (str) => {

        if (str === null)
            return 'null';
        if (typeof str === 'object')
            return "" + str
        if (typeof str === "boolean" && str)
            return 'true'
        else 'false'
        return str;
    }
    const comp = (str = '', sep, rep = 1) => (str + sep).repeat(rep).slice(0, -sep.length);

    let addition = (
        comp(type(options.addition),
            (options.additionSeparator ? options.additionSeparator : '|'),
            options.additionRepeatTimes));

    let strstr = comp((type(string) + addition),
        (options.separator ? options.separator : '+'),
        options.repeatTimes);
    return strstr;


    /*return comp(string,
        (options.additionRepeatTimes > 0 && options.addition ?
            comp(
                options.addition,
                (options.additionSeparator ? options.additionSeparator : '|'),
                options.additionRepeatTimes) :
            ''),
        options.repeatTimes)
(typeof str === 'object' ? str.toString() : (typeof str === "boolean" ? (str ? 'true' : 'false') : str))
*/


    /*
        let sep = (options.separator ? options.separator : '+') + (options.addition ? options.addition : '');
         ((str === null) ? 'null' : str + sep)
            .repeat().slice(0, -sep.length);*/


};