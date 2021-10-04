import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    return (
      1 +
      arr.reduce((previousValue, item, index, array) => {
        let c = 0;
        if (Array.isArray(item)) {
          c = this.calculateDepth(item);
        }
        if (previousValue > c) return previousValue;
        else return c;
      }, 0)
    );
  }
}
