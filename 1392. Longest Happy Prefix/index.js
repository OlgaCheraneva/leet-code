// A string is called a happy prefix if is a non-empty prefix which is also a suffix (excluding itself).
// Given a string s. Return the longest happy prefix of s .
// Return an empty string if no such prefix exists.

// 280 ms
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
    if (typeof s !== 'string' || s.length < 2) return '';
    let strLength = s.length;
    let prefixLength = strLength - 1;
    let prefix = '';
    let suffix = '';
    while (true) {
        if (prefixLength === 0) return '';
        prefix = s.substr(0, prefixLength);
        suffix = s.substr(strLength - prefixLength, prefixLength);
        if (prefix === suffix) return prefix;
        prefixLength--;
    }
};

const s = 'ababab';
console.log(longestPrefix(s));

// // 80 ms
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPrefix = function(s) {
//     const n = s.length;
//     const pi = Array(n).fill(0);
//     for (let i = 1; i < n; i += 1) {
//         let j = pi[i - 1];
//         while (j > 0 && s[i] !== s[j]) {
//             j = pi[j - 1];
//         }
//         if (s[i] === s[j]) {
//             j++;
//         }
//         pi[i] = j;
//     }
//     return s.substr(0, pi[n - 1]);
// };

// // 72 ms
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPrefix = function(s) {
//     const dp = Array(s.length).fill(0);
//     let j = 0;
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] === s[j]) {
//             dp[i] = ++j;
//         } else if (j > 0) {
//             j = dp[j - 1];
//             i -= 1;
//         }
//     }
//     return s.substring(0, j);
// };
