import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(string, options) {
  const type = (str) => {
    if (str === null) return "null";
    if (typeof str === "object") return "" + str;
    if (typeof str === "boolean" && str) return "true";
    else "false";
    return str;
  };
  const comp = (str = "", sep, rep = 1) =>
    (str + sep).repeat(rep).slice(0, -sep.length);

  let addition = comp(
    type(options.addition),
    options.additionSeparator ? options.additionSeparator : "|",
    options.additionRepeatTimes
  );

  let strstr = comp(
    type(string) + addition,
    options.separator ? options.separator : "+",
    options.repeatTimes
  );
  return strstr;
}
