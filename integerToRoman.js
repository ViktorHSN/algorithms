/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {

  const dict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }

  const hasDigit = (number, digit) => {
    return Number((number + "")[0]) == digit;
  }

  const findDigit = (digit) => {

    if (digit == 0) {
      return "";
    } else if (dict[digit]) {
      return dict[digit];
    } else {

      if (hasDigit(digit, 9)) {
        let q = digit / 9;
        return dict[q] + findDigit(digit + q);
      }
      //check subtraction
      if (hasDigit(digit, 4)) {
        let q = digit / 4;
        return dict[q] + findDigit(digit + q);
      }
      //check repetition
      for (let key in dict) {
        if (digit <= key * 3) {
          return dict[key] + findDigit(digit - key);
        }
      }
    }
  }

  let digits = (num + "").split("").map(Number);
  let result = digits.map((el, i, arr) => findDigit(el * (10 ** (arr.length - i - 1)))).join("");

  return result;


};


console.log(intToRoman(4000));