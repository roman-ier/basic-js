import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],
  it: "",
  getLength: function () {
    return this.str.length();
  },
  addLink: function (value = " ") {
    this.arr.push(value === null ? "null" : value);
    return this;
  },
  removeLink: function (position) {
    if (
      position < 1 ||
      position > this.arr.length ||
      typeof position === "string"
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain: function () {
    this.arr.reverse();
    return this;
  },
  finishChain: function () {
    this.it = "( " + this.arr.join(" )~~( ") + " )";
    this.arr = [];
    return this.it;
  },
};
