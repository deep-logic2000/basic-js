const { NotImplementedError } = require("../extensions/index.js");

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
function transform(array) {
 if (!Array.isArray(array)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
 }

 let isDiscarded = false;
 let countDiscardPosition = 0;
 let result = [];
 for (let index = 0; index < array.length; index++) {
  const prevElement = array[index - 1];
  const currentElement = array[index];
  const nextElement = array[index + 1];

  if (countDiscardPosition > 1) {
    isDiscarded = false;
    countDiscardPosition--;
   }

  if (currentElement === "--discard-next") {
   isDiscarded = true;
   countDiscardPosition++;
   index++;
  } else if (currentElement === "--discard-prev") {
   if (result.length > 0 && array[index - 2] !== "--discard-next") {
    result.pop();
   }
  } else if (currentElement === "--double-next") {
   if (nextElement !== undefined) {
    result.push(nextElement);
   }
  } else if (currentElement === "--double-prev") {
    console.log('isDiscarded', isDiscarded);
   if (prevElement !== undefined && !isDiscarded) {
    result.push(prevElement);
   }
  } else {
   result.push(currentElement);
  }
 }

 return result;
}

module.exports = {
 transform,
};

