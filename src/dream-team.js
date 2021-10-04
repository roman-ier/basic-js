import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;

  return arr
    .map((i) =>
      typeof i === "string" ? i.trim().substr(0, 1).toUpperCase() : ""
    )
    .sort()
    .join("");

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
}
