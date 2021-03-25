const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
if ( !Array.isArray(arr))
	return false;

  return arr.map(i=>(typeof i==="string")?i.trim().substr(0,1).toUpperCase():'').sort().join('');

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
