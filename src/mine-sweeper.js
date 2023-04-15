const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
 const columnCount = matrix[0].length;

 const checkCountOfMines = (row, col) => {
  let count = 0;
  // first element
  if (
   matrix[row - 1] &&
   matrix[row - 1][col - 1] !== undefined &&
   matrix[row - 1][col - 1] === true
  ) {
   ++count;
  }
  if (
   matrix[row - 1] &&
   matrix[row - 1][col] !== undefined &&
   matrix[row - 1][col] === true
  ) {
   ++count;
  }
  if (
   matrix[row - 1] &&
   matrix[row - 1][col + 1] !== undefined &&
   matrix[row - 1][col + 1] === true
  ) {
   ++count;
  }
  if (matrix[row][col - 1] !== undefined && matrix[row][col - 1] === true) {
   ++count;
  }
  if (matrix[row][col + 1] !== undefined && matrix[row][col + 1] === true) {
   ++count;
  }
  if (
   matrix[row + 1] &&
   matrix[row + 1][col - 1] !== undefined &&
   matrix[row + 1][col - 1] === true
  ) {
   ++count;
  }
  if (
   matrix[row + 1] &&
   matrix[row + 1][col] !== undefined &&
   matrix[row + 1][col] === true
  ) {
   ++count;
  }
  if (
   matrix[row + 1] &&
   matrix[row + 1][col + 1] !== undefined &&
   matrix[row + 1][col + 1] === true
  ) {
   ++count;
  }
  return count;
 };

 const resultMatrix = [];
 let tempRow;
 let countOfMines;

 for (let i = 0; i < matrix.length; i++) {
  tempRow = [];
  for (let j = 0; j < columnCount; j++) {
   countOfMines = checkCountOfMines(i, j);
   tempRow.push(countOfMines);
  }
  resultMatrix.push(tempRow);
 }

 return resultMatrix;
}

module.exports = {
 minesweeper,
};
