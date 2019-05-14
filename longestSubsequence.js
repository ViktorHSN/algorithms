let longest = "";

let longestSubsequence = function (s1, s2) {

	if (s1.length <= 1) {
		return longest;
	}

	let commonSubstr = "";

	const a1 = [...s1];
	const a2 = [...s2];

	let lastIncludedIndex = 0;

	for (let i = 0; i < a1.length; i++) {
		for (let j = 0; j < a2.length; j++) {
			if (a1[i] == a2[j] && j >= lastIncludedIndex) {
				commonSubstr += a2[j];
				lastIncludedIndex = j + 1;
				break;
			}
		}
	}

	if (commonSubstr.length > longest.length) {
		longest = commonSubstr;
	}

	return longestSubsequence(s1.slice(1), s2);

}

console.log(longestSubsequence("AGGTAB", "GXTAYB"));