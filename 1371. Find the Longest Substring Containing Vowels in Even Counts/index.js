// Given the string s, return the size of the longest substring containing each vowel
// an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.

// Explanation

// We do not need to know the exact count, we just need a flag indicating whether a vowel is even or odd.
// So, we can track the status of each vowel using a bit mask. Since we only have 5 vowels in the English alphabet,
// we will have 32 possible combinations.

// Now, if our mask is zero, then our string contains only even vowels. Also, if a mask is the same for indexes i and j,
// the mask for substring [i + 1, j] must be zero. Therefore, substring [i + 1, j] also contains even vowels only.

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const seen = {0: -1};
    const n = s.length;

    let res = 0;
    let cur = 0;

    for (let i = 0; i < n; i++) {
        cur ^= (1 << ('aeiou'.indexOf(s.charAt(i)) + 1)) >> 1;
        if (seen[cur] === undefined) seen[cur] = i;
        res = Math.max(res, i - seen[cur]);
    }

    return res;
};
// Time: O(N), Space: O(1)

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var findTheLongestSubstring = function(s) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let max = 0;
//     for (let i = 0, l = s.length; i < l; i++) {
//         const notEven = [];
//         for (let j = i; j < l; j++) {
//             const char = s[j];
//             if (vowels.includes(char)) {
//                 if (notEven.includes(char)) {
//                     notEven.splice(notEven.indexOf(char), 1);
//                 } else {
//                     notEven.push(char);
//                 }
//             }
//             if (notEven.length === 0) {
//                 max = Math.max(j - i + 1, max);
//             }
//         }
//     }

//     return max;
// };

console.log(findTheLongestSubstring('eleetminicoworoep')); // 13
console.log(findTheLongestSubstring('leetcodeisgreat')); // 5
console.log(findTheLongestSubstring('bcbcbc')); // 6
