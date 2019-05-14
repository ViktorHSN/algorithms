/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let longest = 0;
  let a = [...s];
  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], i);
    } else {
      if (longest < map.size) {
        longest = map.size;
      }

      i = map.get(a[i]);

      map.clear();
    }
  }
  if (longest < map.size) {
    longest = map.size;
  }
  return longest;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abcabc"));
console.log(lengthOfLongestSubstring("anviaj"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("amqpcsrumjjufpu"));
//console.log("anviaj".indexOf("a"));
