/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {

//   let result = "";
//   if (x > 0) {

//     result = ("" + x).split("").reverse().join("");

//     if (result > (2 ** 31) - 1) {
//       return 0;
//     }

//     return result;

//   }
//   x *= -1;
//   result = ("" + x).split("").reverse().join("");

//   result = "-" + result;


//   if (result < -(2 ** 31)) {
//     return 0;
//   }


//   return result;

// };


var reverse = function (x) {
  let result = 0;

  while (x != 0) {
    result = (result * 10) + (x % 10);
    if (result > (2 ** 31) - 1 || result < -(2 ** 31)) {
      return 0;
    }
    x /= 10;

  }

  return result;

}


console.log(reverse(321));