import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const res = [...arr];
  if (!Array.isArray(arr)) return Error;
  [...arr].forEach((item, index, array) => {
    switch (item) {
      case "--discard-next":
        if (index + 1 === res.length) res[index] = "xxx";
        else {
          res[index] = "xxx";
          res[index + 1] = "xxx";
        }
        break;
      case "--discard-prev":
        if (index === 0) res[index] = "xxx";
        else {
          res[index] = "xxx";
          res[index - 1] = "xxx";
        }
        break;
      case "--double-next":
        index + 1 === res.length
          ? (res[index] = "xxx")
          : (res[index] = res[index + 1]);
        break;
      case "--double-prev":
        index === 0 ? (res[index] = "xxx") : (res[index] = res[index - 1]);
        break;
    }
  });
  return res.filter((i) => i !== "xxx");
}
