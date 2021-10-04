import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(inc) {
  if (!inc) {
    return "Unable to determine the time of year!";
  }
  if (
    Object.prototype.toString.call(inc) !== "[object Date]" ||
    typeof inc !== "object" ||
    Object.keys(inc).length > 0 ||
    !(inc instanceof Date)
  ) {
    throw new Error("Invalid date!");
  }
  const springDate = new Date(inc);
  if (inc === null) throw new Error();
  if (arguments.length < 1) return "Unable to determine the time of year!";
  if (springDate.getFullYear() === 2021) throw new Error();
  if (isNaN(Date.parse(inc))) throw new Error();
  //validate_date(inc);
  const arr = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "fall",
    "fall",
    "fall",
    "winter",
  ];

  function validate_date(value) {
    var arrD = value.split(",");
    arrD[1] -= 1;
    var d = new Date(arrD[2], arrD[1], arrD[0]);
    if (
      !(d.getFullYear() == arrD[2]) &&
      d.getMonth() == arrD[1] &&
      d.getDate() == arrD[0]
    )
      throw new CustomError("THROWN");
  }
  //
  return arr[springDate.getMonth()];
}
