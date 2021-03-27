const CustomError = require("../extensions/custom-error");

module.exports = transform = arr => {
    const res = [...arr];
    if (!Array.isArray(arr))
        return Error;
    [...arr].forEach((item, index, array) => {
        switch (item) {
            case '--discard-next':
                if ((index + 1) === res.length)
                    res[index] = 'xxx';
                else {
                    res[index] = 'xxx';
                    res[index + 1] = 'xxx';
                }
                break;
            case '--discard-prev':
                if (index === 0)
                    res[index] = 'xxx'
                else {
                    res[index] = 'xxx';
                    res[index - 1] = 'xxx';
                }
                break;
            case '--double-next':
                (index + 1) === res.length ?
                    res[index] = 'xxx' :
                    res[index] = res[index + 1];
                break;
            case '--double-prev':
                index === 0 ?
                    res[index] = 'xxx' :
                    res[index] = res[index - 1];
                break;
        }
    })
    return res.filter(i => i !== 'xxx');
};