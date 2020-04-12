/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const charsCount = new Map();
    const orderedChars = Array.from(new Set(s)).sort((a, b) =>
        a.localeCompare(b)
    );
    [...s].forEach((char) => {
        if (charsCount.has(char)) {
            charsCount.set(char, charsCount.get(char) + 1);
        } else {
            charsCount.set(char, 1);
        }
    });

    const result = [];
    let isIncreasing = true;
    while (result.length < s.length) {
        for (let j = 0; j < orderedChars.length; j++) {
            let pos = j;
            if (!isIncreasing) {
                pos = orderedChars.length - 1 - j;
            }
            if (charsCount.get(orderedChars[pos]) !== 0) {
                result.push(orderedChars[pos]);
                charsCount.set(
                    orderedChars[pos],
                    charsCount.get(orderedChars[pos]) - 1
                );
            }
        }

        isIncreasing = !isIncreasing;
    }

    return result.join('');
};

const s = 'aaaabbbbcccc';
// const s = 'leetcode';
// console.log(sortString(s)); // "abccbaabccba"
console.log(sortString(s)); // "cdelotee"

// Time: 1:20
