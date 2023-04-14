const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(str, options) {
 let resStr = "";
 let counterStr = options.repeatTimes || 1;
 let counterAddition = options.additionRepeatTimes || 1;
 let optionsAddition = options.addition;

 if (typeof str !== "string") {
  str = String(str);
 }

 if (optionsAddition === undefined) {
  optionsAddition = "";
 } else {
  optionsAddition = String(options.addition);
 }

 for (let i = 0; i < counterStr; i++) {
  resStr += str;
  for (let j = 0; j < counterAddition; j++) {
   resStr += optionsAddition;
   if (j !== counterAddition - 1) {
    resStr += options.additionSeparator || "|";
   }
  }
  if (i !== counterStr - 1) {
   resStr += options.separator || "+";
  }
 }

 console.log("result", resStr);

 return resStr;
}

module.exports = {
 repeater,
};
