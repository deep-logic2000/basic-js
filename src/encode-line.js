const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 let resStr = "";

 let tempChar = str[0]; // c
 let tempCharCount = 0; // 2

 for (let i = 0; i < str.length; i++) {
  debugger;
  // 6 - a
  if (str[i] === tempChar) {
   tempCharCount++;
   if (i === str.length - 1) {
    resStr += `${tempCharCount}${tempChar}`;
   }
  } else {
   if (i === str.length - 1) {
    tempCharCount <= 1
     ? (resStr += tempChar)
     : (resStr += `${tempCharCount}${tempChar}`);
    resStr += str[i];
   } else {
    tempCharCount <= 1
     ? (resStr += tempChar)
     : (resStr += `${tempCharCount}${tempChar}`);
    tempChar = str[i];
    tempCharCount = 1;

   }
  }
 }

 return resStr;
}

module.exports = {
 encodeLine,
};

