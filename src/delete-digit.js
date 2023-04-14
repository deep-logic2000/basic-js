const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let maxNum = Number(n.toString()[0]);
 let strFromNum = n.toString();

 let tempNum;
 for (let index = 0; index < strFromNum.length; index++) {
  tempNum = strFromNum.replace(strFromNum[index], "");
  if (Number(tempNum) > maxNum) {
   maxNum = tempNum;
  }
 }

 return Number(maxNum);
}

module.exports = {
 deleteDigit,
};

