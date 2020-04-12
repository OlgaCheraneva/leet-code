// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// O(n)
// 200 ms
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const map = new Map();
    [...s].forEach(ch => {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        } else {
            map.set(ch, 1);
        }
    });
    let counter = 0;
    [...t].forEach(ch => {
        if (map.has(ch) && map.get(ch) !== 0) {
            map.set(ch, map.get(ch) - 1);
        } else {
            counter++;
        }
    });

    return counter;
};

// O(n)
// 64 ms
// console.log('a'.charCodeAt(0)); // 97
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const ALPHABET_START_CHAR_CODE = 97;
    const ALPHABET_LENGTH = 26;

    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const indexS = s.charCodeAt(i) - ALPHABET_START_CHAR_CODE;
        const indexT = t.charCodeAt(i) - ALPHABET_START_CHAR_CODE;

        counts[indexT]++;
        counts[indexS]--;
    }

    let count = 0;
    for (let i = 0; i < ALPHABET_LENGTH; i++) {
        counts[i] > 0 && (count += counts[i]);
    }

    return count;
};

const s = 'bab';
const t = 'aba';
console.log(minSteps(s, t));
