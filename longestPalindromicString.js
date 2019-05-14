/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeRecursive = function(s) {
  let longest = "";

  let LCS = input => {
    if (input == longest) {
      return input;
    }

    if (input.length <= 1) {
      if (longest.length < input.length) {
        longest = input;
        return;
      }
    }

    if (
      input ==
      input
        .split("")
        .reverse()
        .join("")
    ) {
      if (longest.length < input.length) {
        longest = input;
        return;
      }
    } else {
      LCS(input.slice(0, input.length - 1));
      LCS(input.slice(1));
    }
  };

  LCS(s);

  return longest;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  s = "#" + s.split("").join("#") + "#";
  let result = "";
  let l, r;

  for (let i = 0; i < s.length; i++) {
    if (result.length === s.length) break;
    l = r = 0;

    while (s[i - l] && s[i + r] && s[i - l] === s[i + r]) {
      if (i + r - (i - l) > result.length) {
        result = s.slice(i - l, i + r + 1);
      }
      l++;
      r++;
    }
  }

  return result.split("#").join("");
};

console.log(longestPalindromeRecursive("abcacd"));
