/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

  let zigzag = [...Array(numRows)].map(e => []);
  let result = "";
  let countChars = 0;

  let iterateLinear = () => {
    for (let i = 0; i < numRows; i++) {
      zigzag[i][zigzag[i].length] = s.charAt(countChars);
      countChars++;
    }
  }

  let iterateTransversal = () => {
    for (let i = numRows - 2; i > 0; i--) {
      zigzag[i][zigzag[i].length] = s.charAt(countChars);
      countChars++;
    }
  }

  while (countChars < s.length) {
    iterateLinear();
    iterateTransversal();
  }

  for (let i = 0; i < zigzag.length; i++) {
    for (let j = 0; j < zigzag[i].length; j++) {
      result += zigzag[i][j];
    }
  }

  return result;

};

console.log(convert('PAYPALISHIRING', 4));