const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    it: '',
    getLength: function() {
        return this.str.length();
    },
    addLink: function(value = ' ') {
        this.arr.push(value === null ? 'null' : value);
        return this;
    },
    removeLink: function(position) {
        if (position < 1 || position > this.arr.length || typeof position === 'string') {
            this.arr = [];
            throw new Error();
        }
        this.arr.splice((position - 1), 1);
        return this;
    },
    reverseChain: function() {
        this.arr.reverse();
        return this;
    },
    finishChain: function() {
        this.it = '( ' + this.arr.join(' )~~( ') + ' )';
        this.arr = [];
        return this.it;
    }
};

module.exports = chainMaker;